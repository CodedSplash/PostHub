import { Avatar, Flex, Space, Typography } from 'antd'
import { IPost } from '../../../models/Post.model'
import ResponseData from '../../../models/ResponseData.model'
import { useGetUserQuery } from '../../../servicies/UserService'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface IPostPageHeaderProps {
	post: ResponseData<IPost>
}

const PostPageHeader: FC<IPostPageHeaderProps> = ({ post }) => {
	const { data: user } = useGetUserQuery(post.data.author)

	return (
		<Flex align={'center'} gap={'small'}>
			<Link to={`/users/${post?.data.author}`}>
				<Space direction={'horizontal'} size={'small'}>
					<Avatar src={'/img/default-avatar.png'} size={'large'} />
					<Typography.Text strong>{user?.data.nickname}</Typography.Text>
				</Space>
			</Link>
			<Typography.Text>
				{new Date(post!.data.dateCreated!).toUTCString()}
			</Typography.Text>
		</Flex>
	)
}

export default PostPageHeader
