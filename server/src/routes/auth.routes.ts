import { Router } from 'express'
import AuthController from '../controllers/auth.controller'
import asyncHandler from 'express-async-handler'
import { body } from 'express-validator'
import authMiddleware from '../middlewares/auth.middleware'

const router = Router()

const registrationValidator = [
	body('nickname')
		.trim()
		.isLength({ min: 8, max: 32 })
		.isString()
		.withMessage(
			'вам нужно ввести никнейм длиной не менее 8 символов и не более 32'
		),
	body('email').isEmail().withMessage('вам нужно ввести почту'),
	body('password')
		.trim()
		.isLength({ min: 8, max: 18 })
		.isString()
		.withMessage(
			'вам нужно ввести пароль длиной не менее 8 символов и не более 18'
		),
]

const loginValidator = [
	body('email').isEmail().withMessage('вам нужно ввести почту'),
	body('password')
		.trim()
		.isLength({ min: 8, max: 18 })
		.isString()
		.withMessage(
			'вам нужно ввести пароль длиной не менее 8 символов и не более 18'
		),
]

router.get('/last-users', asyncHandler(AuthController.getLastUsers))

router.post(
	'/registration',
	registrationValidator,
	asyncHandler(AuthController.registration)
)
router.post('/login', loginValidator, asyncHandler(AuthController.login))
router.post('/logout', asyncHandler(AuthController.logout))
router.post('/refresh', asyncHandler(AuthController.refresh))
router.get(
	'/user/:id',
	asyncHandler(authMiddleware),
	asyncHandler(AuthController.getUser)
)
router.get(
	'/user/posts/:id',
	asyncHandler(authMiddleware),
	asyncHandler(AuthController.getUserPosts)
)
router.get(
	'/users',
	asyncHandler(authMiddleware),
	asyncHandler(AuthController.getUsers)
)

export default router
