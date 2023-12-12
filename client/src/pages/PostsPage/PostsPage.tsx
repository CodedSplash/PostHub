import { FC } from 'react'
import { useGetPostsQuery } from '../../servicies/PostsService'
import Loading from '../../components/ui/Loading/Loading'
import PostsList from '../../components/logic/PostsList/PostsList'

const PostsPage: FC = () => {
	const { data: posts, isLoading } = useGetPostsQuery()

	if (isLoading) {
		return <Loading />
	}

	return (
		<PostsList
			posts={posts}
			title={'Посты'}
			emptyDescription={'Посты не найдены!'}
			addButton={true}
		/>
	)
}

export default PostsPage
