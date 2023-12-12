import createError from 'http-errors'
import bcrypt from 'bcrypt'
import User from '../models/User'
import tokenService from './token.service'
import UserDto from '../dtos/userDto'
import Post from '../models/Post'
import IUserDto from '../interfaces/userDto'

class UserService {
	async registration(nickname: string, email: string, password: string) {
		const findUser = await User.findOne({ email })
		if (findUser) {
			throw createError(400, `Пользователь с такой почтой уже существует!`)
		}

		const hashPassword = await bcrypt.hash(password, 9)

		const user = await User.create({
			nickname,
			email,
			password: hashPassword,
		})

		const userDto = new UserDto(user)

		const tokens = await tokenService.generateTokens({ ...userDto })
		await tokenService.saveToken(userDto.id, tokens.refreshToken)

		return { ...tokens, user: userDto }
	}

	async login(email: string, password: string) {
		const user = await User.findOne({ email })
		if (!user) {
			throw createError(400, 'Неверно введена почта или пароль!')
		}

		const verifiedPassword = await bcrypt.compare(password, user.password)
		if (!verifiedPassword) {
			throw createError(400, 'Неверно введена почта или пароль!')
		}

		const userDto = new UserDto(user)
		const tokens = await tokenService.generateTokens({ ...userDto })
		await tokenService.saveToken(userDto.id, tokens.refreshToken)

		return { ...tokens, user: userDto }
	}

	async logout(refreshToken: string) {
		const token = await tokenService.deleteToken(refreshToken)
		return token
	}

	async refresh(refreshToken: string) {
		if (!refreshToken) {
			throw createError(401, 'Пользователь не авторизован')
		}
		const userData = tokenService.validateRefreshToken(refreshToken)
		const userFromDb = await tokenService.findToken(refreshToken)

		if (!userData || !userFromDb) {
			throw createError(401, 'Пользователь не авторизован')
		}

		const user = await User.findById(userData.id)
		const userDto = new UserDto(user as IUserDto)
		const tokens = await tokenService.generateTokens({ ...userDto })
		await tokenService.saveToken(userDto.id, tokens.refreshToken)

		return { ...tokens, user: userDto }
	}

	async getUserPosts(id: string) {
		const posts = await Post.find({ author: id })
		if (!posts) {
			throw createError(400, 'Посты пользователя не найдены!')
		}
		return posts
	}

	async getUser(id: string) {
		const user = await User.findById(id)
		if (!user) {
			throw createError(400, 'Пользователь не найден!')
		}
		const userDto = new UserDto(user)
		return userDto
	}

	async getUsers() {
		const users = await User.find()
		const usersDto = users ? users.map((user) => new UserDto(user)) : []
		return usersDto
	}

	async getLastUsers() {
		const users = await User.find()
		if (users) {
			const sortUsers = users.sort(
				(a, b) =>
					new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
			)

			const lastUsers = sortUsers
				.slice(0, 3)
				.map((lastUser) => new UserDto(lastUser))

			return lastUsers
		}

		return users
	}
}

export default new UserService()
