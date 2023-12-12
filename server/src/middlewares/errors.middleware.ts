import { NextFunction, Request, Response } from 'express'
import createError from 'http-errors'

export function ErrorMiddleware(
	error: any,
	req: Request,
	res: Response,
	next: NextFunction
): void {
	const status =
		error.name === 'CastError' || error.statusCode
			? error.statusCode || 400
			: 500
	res.status(status).json({
		status: status,
		message: error.message,
	})
}

export function notFoundMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	return next(createError(404))
}
