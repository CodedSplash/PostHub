import { useState } from 'react'
import { useCreatePostMutation } from '../servicies/PostService'
import { useAppSelector } from './useStoreHooks'
import { selectUserState } from '../store/slices/auth/AuthSlice'
import { useNavigate } from 'react-router-dom'
import { IPostCreate } from '../models/Post.model'
import { isErrorFromBackend } from '../utils/isErrorFromBackend'
import useRedirectPath from './useRedirectPath'

const useCreatePostPage = () => {
	const navigate = useNavigate()

	const [createPostError, setCreatePostError] = useState('')

	const [createPost, { isError, isLoading }] = useCreatePostMutation()

	const user = useAppSelector(selectUserState)

	const redirectPath = useRedirectPath('/posts')

	const createPostHandler = async (data: IPostCreate) => {
		try {
			const createData = {
				...data,
				author: user.id,
			}
			await createPost(createData).unwrap()
			navigate(redirectPath)
		} catch (error) {
			if (isErrorFromBackend(error)) {
				setCreatePostError(error.data.message)
			} else {
				setCreatePostError('Неизвестная ошибка!')
			}
		}
	}

	return { createPostError, isError, isLoading, createPostHandler }
}

export default useCreatePostPage
