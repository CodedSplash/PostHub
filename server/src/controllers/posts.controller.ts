import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import createError from 'http-errors'
import PostService from '../servicies/post.service'

class Posts {
	async getPost(req: Request, res: Response) {
		const post = await PostService.getPost(req.params.id)
		res.json({ data: post })
	}

	async getPosts(req: Request, res: Response) {
		const posts = await PostService.getPosts()
		res.json({ data: posts })
	}

	async createPost(req: Request, res: Response) {
		const error = validationResult(req.body)

		if (!error.isEmpty()) {
			throw createError(400, error.array()[0].msg)
		}

		req.body.author = res.locals.user.id
		const post = await PostService.createPost(req.body)
		res.json({ data: post })
	}

	async updatePost(req: Request, res: Response) {
		const error = validationResult(req.body)

		if (!error.isEmpty()) {
			throw createError(400, error.array()[0].msg)
		}

		const post = await PostService.updatePost(req.params.id, req.body)
		res.json({ data: post })
	}

	async deletePost(req: Request, res: Response) {
		const post = await PostService.deletePost(req.params.id)
		res.json({ data: post })
	}

	async getLastPost(req: Request, res: Response) {
		const lastPosts = await PostService.getLastPost()

		res.json({ data: lastPosts })
	}
}

export default new Posts()
