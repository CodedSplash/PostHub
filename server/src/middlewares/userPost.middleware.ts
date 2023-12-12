import createError from 'http-errors'
import { NextFunction, Response, Request } from 'express'
import Post from '../models/Post'

async function userPostMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const roles = res.locals.user.roles
	if (roles.includes('admin')) {
		return next()
	}

	const post = await Post.findById(req.params.id)
	if (!post) {
		throw createError(400, 'Пост не найден!')
	}

	const userId = res.locals.user.id as string
	const postAuthorId = post.author?.toString()

	if (postAuthorId !== userId) {
		throw createError(403, 'Отказано в доступе!')
	}

	return next()
}

export default userPostMiddleware
