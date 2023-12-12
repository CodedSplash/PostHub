import { MoreOutlined } from '@ant-design/icons'
import { Button, Dropdown } from 'antd'
import { FC } from 'react'
import { useAppSelector } from '../../../hooks/useStoreHooks'
import { selectUserState } from '../../../store/slices/auth/AuthSlice'
import usePostDropDownItems from '../../../hooks/usePostDropDownItems'

interface IPostCardDropDownProps {
	userIDPost: string
	postID: string
	showDropDown?: boolean
}

const PostCardDropDown: FC<IPostCardDropDownProps> = ({
	userIDPost,
	postID,
	showDropDown = true,
}) => {
	const user = useAppSelector(selectUserState)

	const items = usePostDropDownItems(postID)

	if (
		!showDropDown ||
		(userIDPost !== user.id && !user.roles.includes('admin'))
	) {
		return null
	}

	return (
		<div onClick={(e) => e.preventDefault()}>
			<Dropdown menu={{ items }}>
				<Button type={'default'} shape={'default'} icon={<MoreOutlined />} />
			</Dropdown>
		</div>
	)
}

export default PostCardDropDown
