import createError from 'http-errors'
import { NextFunction, Response, Request } from 'express'
import tokenService from '../servicies/token.service'

function authMiddleware(req: Request, res: Response, next: NextFunction) {
	const accessToken = req.headers.authorization?.split(' ')[1]
	if (!accessToken) {
		throw createError(401, 'Пользователь не авторизован!')
	}

	const userData = tokenService.validateAccessToken(accessToken)
	if (!userData) {
		throw createError(401, 'Пользователь не авторизован!')
	}

	res.locals.user = userData
	return next()
}

export default authMiddleware
