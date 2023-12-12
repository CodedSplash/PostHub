import { useMemo } from 'react'
import { IPost } from '../models/Post.model'

const filtered = (posts: IPost[], typeFiltering: string) => {
	const postsCopy = [...posts]

	switch (typeFiltering) {
		case 'sortByTitle':
			return postsCopy.sort((a, b) => a.title.localeCompare(b.title))

		case 'sortByContent':
			return postsCopy.sort((a, b) => a.content.localeCompare(b.content))

		case 'sortByDate':
			return postsCopy.sort(
				(a, b) =>
					new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
			)

		default:
			return posts
	}
}

const found = (filteredPosts: IPost[], searchValue: string) => {
	if (searchValue) {
		return filteredPosts.filter((filteredPost) =>
			filteredPost.title.toLowerCase().includes(searchValue.toLowerCase())
		)
	}

	return filteredPosts
}

const useFilteringPosts = (
	posts: IPost[],
	typeFiltering: string,
	searchValue: string
) => {
	const filteredPosts = useMemo(
		() => filtered(posts, typeFiltering),
		[posts, typeFiltering]
	)

	const foundPosts = useMemo(
		() => found(filteredPosts, searchValue),
		[filteredPosts, searchValue]
	)

	return foundPosts
}

export default useFilteringPosts
