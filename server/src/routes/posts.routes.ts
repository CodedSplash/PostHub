import Posts from '../controllers/posts.controller'
import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import { body } from 'express-validator'
import authMiddleware from '../middlewares/auth.middleware'
import userPostMiddleware from '../middlewares/userPost.middleware'

const router = Router()
const validationConditions = [
	body('title')
		.isLength({ min: 15, max: 64 })
		.trim()
		.isString()
		.withMessage(
			'Вам нужно ввести название длиной не менее 15 и не более 64 символов'
		),
	body('content')
		.isLength({ min: 50, max: 5000 })
		.trim()
		.isString()
		.withMessage(
			'Вам нужно ввести описание длиной не менее 50 и не более 5000 символов'
		),
]

router.get('/last', asyncHandler(Posts.getLastPost))

router
	.route('/')
	.get(asyncHandler(authMiddleware), asyncHandler(Posts.getPosts))
	.post(
		asyncHandler(authMiddleware),
		validationConditions,
		asyncHandler(Posts.createPost)
	)

router
	.route('/:id')
	.get(asyncHandler(authMiddleware), asyncHandler(Posts.getPost))
	.put(
		asyncHandler(authMiddleware),
		asyncHandler(userPostMiddleware),
		validationConditions,
		asyncHandler(Posts.updatePost)
	)
	.delete(
		asyncHandler(authMiddleware),
		asyncHandler(userPostMiddleware),
		asyncHandler(Posts.deletePost)
	)

export default router
