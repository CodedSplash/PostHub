import { FC } from 'react'
import { IPost } from '../../../models/Post.model'
import { Empty, Space } from 'antd'
import PostCard from '../../ui/PostCard/PostCard'
import styles from './ContentPostsList.module.css'

interface IContentPostsListProps {
	posts: IPost[] | undefined
	emptyDescription: string
}

const ContentPostsList: FC<IContentPostsListProps> = ({
	posts,
	emptyDescription,
}) => {
	return posts?.length ? (
		<Space direction={'vertical'} size={'middle'} className={styles.space}>
			{posts.map((post) => (
				<PostCard key={post._id} post={post} />
			))}
		</Space>
	) : (
		<Empty description={<span>{emptyDescription}</span>} />
	)
}

export default ContentPostsList
