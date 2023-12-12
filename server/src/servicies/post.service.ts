import Post from '../models/Post'
import createError from 'http-errors'

class PostService {
	async getPost(id: string) {
		const post = await Post.findById(id)
		if (!post) {
			throw createError(400, 'Пост не найден.')
		}
		return post
	}

	async getPosts() {
		const posts = await Post.find()
		return posts || []
	}

	async createPost(body: any) {
		const post = await Post.create(body)
		return post
	}

	async updatePost(id: string, body: any) {
		const post = await Post.findByIdAndUpdate(id, body)
		if (!post) {
			throw createError(400, 'Пост не найден.')
		}

		return post
	}

	async deletePost(id: string) {
		const post = await Post.findByIdAndDelete(id)
		if (!post) {
			throw createError(400, 'Пост не найден.')
		}
		return post
	}

	async getLastPost() {
		const posts = await Post.find()
		if (posts) {
			const sortPosts = posts.sort(
				(a, b) =>
					new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
			)

			const lastPosts = sortPosts.slice(0, 3)

			return lastPosts
		}

		return posts
	}
}

export default new PostService()
