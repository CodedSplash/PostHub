import { Divider, Empty, Space, Typography } from 'antd'
import { FC } from 'react'
import { IPost } from '../../../models/Post.model'
import PostCard from '../../ui/PostCard/PostCard'
import styles from './HomePostsList.module.css'

interface IHomePostsListProps {
	posts: IPost[] | undefined
	emptyDescription: string
}

const HomePostsList: FC<IHomePostsListProps> = ({
	posts,
	emptyDescription,
}) => {
	return (
		<div className={styles.content}>
			<Typography.Title level={3}>Последние созданные посты</Typography.Title>
			<Divider type={'horizontal'} />
			{posts?.length ? (
				<Space direction={'vertical'} size={'middle'} className={styles.space}>
					{posts.map((post) => (
						<PostCard post={post} showDropDown={false} key={post._id} />
					))}
				</Space>
			) : (
				<Empty description={<span>{emptyDescription}</span>} />
			)}
		</div>
	)
}

export default HomePostsList
