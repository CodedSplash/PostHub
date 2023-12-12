import { Typography } from 'antd'
import { IPost } from '../../../models/Post.model'
import { useGetUserQuery } from '../../../servicies/UserService'
import { FC } from 'react'
import styles from './PostCardDescription.module.css'

interface IPostCardDescriptionProps {
	post: IPost
}

const PostCardDescription: FC<IPostCardDescriptionProps> = ({ post }) => {
	const { data: user } = useGetUserQuery(post.author)

	return (
		<div>
			<Typography.Paragraph className={styles.content}>
				{post.content}
			</Typography.Paragraph>
			<Typography.Paragraph className={styles.nickname}>
				{user?.data.nickname}
			</Typography.Paragraph>
			<Typography.Text>
				{new Date(post.dateCreated).toUTCString()}
			</Typography.Text>
		</div>
	)
}

export default PostCardDescription
