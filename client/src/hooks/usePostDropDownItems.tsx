import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useCallback, useMemo, MouseEvent } from 'react'
import { useDeletePostMutation } from '../servicies/PostService'
import { MenuProps } from 'antd'
import useRedirectPath from './useRedirectPath'

const usePostDropDownItems = (postID: string) => {
	const location = useLocation()
	const navigate = useNavigate()

	const [postDelete] = useDeletePostMutation()

	const redirectPath = useRedirectPath('/posts')

	const handleDelete = useCallback(
		(e: MouseEvent) => {
			e.preventDefault()
			postDelete(postID)
			if (location.pathname === `/posts/${postID}`) {
				navigate(redirectPath)
			}
		},
		[postDelete, location, redirectPath, navigate, postID]
	)

	return useMemo<MenuProps['items']>(
		() => [
			{
				label: (
					<a href={'/'} style={{ color: 'red' }} onClick={handleDelete}>
						Удалить
					</a>
				),
				key: '0',
			},
			{
				label: (
					<Link to={`/posts/${postID}/edit`} state={{ from: location }}>
						Редактировать
					</Link>
				),
				key: '1',
			},
		],
		[postID, location, handleDelete]
	)
}

export default usePostDropDownItems
