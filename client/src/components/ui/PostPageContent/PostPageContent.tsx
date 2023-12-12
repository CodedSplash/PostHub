import { FC } from 'react'
import ResponseData from '../../../models/ResponseData.model'
import { IPost } from '../../../models/Post.model'
import { Typography } from 'antd'
import styles from './PostPageContent.module.css'

interface IPostPageContentProps {
	post: ResponseData<IPost>
}

const PostPageContent: FC<IPostPageContentProps> = ({ post }) => {
	return (
		<>
			<Typography.Title level={1}>{post.data.title}</Typography.Title>
			<Typography.Paragraph className={styles.content}>
				{post.data.content}
			</Typography.Paragraph>
		</>
	)
}

export default PostPageContent
