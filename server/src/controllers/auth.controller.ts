import createError from 'http-errors'
import { Request, Response } from 'express'
import userService from '../servicies/user.service'
import { validationResult } from 'express-validator'

class AuthController {
	async registration(req: Request, res: Response) {
		const error = validationResult(req)
		if (!error.isEmpty()) {
			throw createError(400, error.array()[0].msg)
		}

		const { nickname, email, password } = req.body
		const userData = await userService.registration(nickname, email, password)
		res.cookie('refreshToken', userData.refreshToken, {
			maxAge: 30 * 24 * 60 * 60 * 1000,
			httpOnly: true,
		})
		res.json(userData)
	}

	async login(req: Request, res: Response) {
		const error = validationResult(req)
		if (!error.isEmpty()) {
			throw createError(400, error.array()[0].msg)
		}

		const { email, password } = req.body
		const userData = await userService.login(email, password)
		res.cookie('refreshToken', userData.refreshToken, {
			maxAge: 30 * 24 * 60 * 60 * 1000,
			httpOnly: true,
		})
		res.json(userData)
	}

	async logout(req: Request, res: Response) {
		const { refreshToken } = req.cookies
		const token = await userService.logout(refreshToken)
		res.clearCookie('refreshToken')
		res.json(token)
	}

	async refresh(req: Request, res: Response) {
		const { refreshToken } = req.cookies
		const userData = await userService.refresh(refreshToken)
		res.cookie('refreshToken', userData.refreshToken, {
			maxAge: 30 * 24 * 60 * 60 * 1000,
			httpOnly: true,
		})
		res.json(userData)
	}

	async getUserPosts(req: Request, res: Response) {
		const posts = await userService.getUserPosts(req.params.id)
		res.json({ data: posts })
	}

	async getUser(req: Request, res: Response) {
		const user = await userService.getUser(req.params.id)
		res.json({ data: user })
	}

	async getUsers(req: Request, res: Response) {
		const users = await userService.getUsers()
		res.json({ data: users })
	}

	async getLastUsers(req: Request, res: Response) {
		const lastUsers = await userService.getLastUsers()

		res.json({ data: lastUsers })
	}
}

export default new AuthController()
