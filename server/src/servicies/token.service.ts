import IUserDto from './../interfaces/userDto'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import Token from '../models/Token'

class TokenService {
	async generateTokens(payload: any) {
		const accessToken = jwt.sign(
			payload,
			process.env.JWT_SECRET_ACCESS as string,
			{
				expiresIn: '15m',
			}
		)
		const refreshToken = jwt.sign(
			payload,
			process.env.JWT_SECRET_REFRESH as string,
			{
				expiresIn: '30d',
			}
		)

		return { accessToken, refreshToken }
	}

	async saveToken(userId: mongoose.Types.ObjectId, refreshToken: string) {
		const token = await Token.findOne(userId)
		if (token) {
			token.refreshToken = refreshToken
			return token.save()
		}
		await Token.create({
			user: userId,
			refreshToken,
		})

		return token
	}

	async deleteToken(refreshToken: string) {
		const token = await Token.deleteOne({ refreshToken })
		return token
	}

	validateAccessToken(accessToken: string) {
		try {
			const userData = jwt.verify(
				accessToken,
				process.env.JWT_SECRET_ACCESS as string
			) as IUserDto
			return userData
		} catch (error) {
			return null
		}
	}

	validateRefreshToken(refreshToken: string) {
		try {
			const userData = jwt.verify(
				refreshToken,
				process.env.JWT_SECRET_REFRESH as string
			) as IUserDto
			return userData
		} catch (error) {
			return null
		}
	}

	async findToken(refreshToken: string) {
		const token = await Token.findOne({ refreshToken })
		return token
	}
}

export default new TokenService()
