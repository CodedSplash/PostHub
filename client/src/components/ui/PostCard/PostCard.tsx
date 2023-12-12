import { Card, Flex } from 'antd'
import Meta from 'antd/es/card/Meta'
import { FC } from 'react'
import { IPost } from '../../../models/Post.model'
import { Link, useLocation } from 'react-router-dom'
import PostCardDescription from '../PostCardDescription/PostCardDescription'
import PostCardDropDown from '../../logic/PostCardDropDown/PostCardDropDown'
import styles from './PostCard.module.css'

interface IPostCardProps {
	post: IPost
	showDropDown?: boolean
}

const PostCard: FC<IPostCardProps> = ({ post, showDropDown }) => {
	const location = useLocation()

	return (
		<Link to={`/posts/${post._id}`} state={{ from: location }}>
			<Card hoverable>
				<Flex justify={'space-between'} className={styles.cardBody}>
					<Meta
						title={post.title}
						description={<PostCardDescription post={post} />}
					/>

					<PostCardDropDown
						userIDPost={post.author}
						postID={post._id}
						showDropDown={showDropDown}
					/>
				</Flex>
			</Card>
		</Link>
	)
}

export default PostCard
