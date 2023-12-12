import { useState } from 'react'
import { IPost } from '../models/Post.model'
import ResponseData from '../models/ResponseData.model'
import useFilteringPosts from './useFilteringPosts'

const usePostsList = (posts: ResponseData<IPost[]> | undefined) => {
	const [searchValue, setSearchValue] = useState('')
	const [typeFiltering, setTypeFiltering] = useState('')

	const filteredPosts = useFilteringPosts(
		posts ? posts.data : [],
		typeFiltering,
		searchValue
	)

	const handleSearch = (value: string) => {
		setSearchValue(value)
	}
	const handleChangeFilter = (value: string) => {
		setTypeFiltering(value)
	}

	return { filteredPosts, handleSearch, handleChangeFilter }
}

export default usePostsList
