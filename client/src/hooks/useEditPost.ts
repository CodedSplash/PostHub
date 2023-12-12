import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useUpdatePostMutation } from '../servicies/PostService'
import { isErrorFromBackend } from '../utils/isErrorFromBackend'
import { IPostCreate } from '../models/Post.model'
import { useAppSelector } from './useStoreHooks'
import { selectUserState } from '../store/slices/auth/AuthSlice'
import useRedirectPath from './useRedirectPath'

const useEditPost = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const [updateError, setUpdateError] = useState('')

	const user = useAppSelector(selectUserState)

	const [updatePost, { isError, isLoading: isUpdatePostLoading }] =
		useUpdatePostMutation()

	const redirectPath = useRedirectPath('/posts')

	const updatePostHandle = async (data: IPostCreate) => {
		try {
			const updateData = {
				id: id!,
				body: { ...data, author: user.id },
			}

			await updatePost(updateData).unwrap()
			navigate(redirectPath)
		} catch (error) {
			if (isErrorFromBackend(error)) {
				setUpdateError(error.data.message)
			} else {
				setUpdateError('Неизвестная ошибка!')
			}
		}
	}

	return {
		updateError,
		isError,
		isUpdatePostLoading,
		updatePostHandle,
	}
}

export default useEditPost
