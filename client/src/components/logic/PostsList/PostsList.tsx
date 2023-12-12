import { Divider } from 'antd'
import { FC } from 'react'
import ResponseData from '../../../models/ResponseData.model'
import { IPost } from '../../../models/Post.model'
import HeaderPostsList from '../HeaderPostsList/HeaderPostsList'
import ContentPostsList from '../ContentPostsList/ContentPostsList'
import styles from './PostsList.module.css'
import usePostsList from '../../../hooks/usePostsList'

interface IPostsListProps {
	posts: ResponseData<IPost[]> | undefined
	title: string
	emptyDescription: string
	userID?: string
	addButton?: boolean
}

const PostsList: FC<IPostsListProps> = ({
	posts,
	emptyDescription,
	title,
	userID,
	addButton = false,
}) => {
	const { filteredPosts, handleChangeFilter, handleSearch } =
		usePostsList(posts)

	return (
		<div className={styles.listContainer}>
			<HeaderPostsList
				title={title}
				userID={userID}
				addButton={addButton}
				handleSearch={handleSearch}
				handleChange={handleChangeFilter}
				filters={posts?.data ? true : false}
			/>
			<Divider type={'horizontal'} />
			<ContentPostsList
				emptyDescription={emptyDescription}
				posts={filteredPosts}
			/>
		</div>
	)
}

export default PostsList
