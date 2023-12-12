import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useGetUserQuery } from '../../servicies/UserService'
import Loading from '../../components/ui/Loading/Loading'
import { useGetUserPostsQuery } from '../../servicies/PostsService'
import UserContent from '../../components/ui/UserContent/UserContent'
import PostsList from '../../components/logic/PostsList/PostsList'
import EmptyUser from '../../components/ui/EmptyUser/EmptyUser'

const UserPage: FC = () => {
	const { id } = useParams()

	const { data: user, isLoading: isUserLoading } = useGetUserQuery(id!)
	const { isLoading: isPostsLoading, data: userPostsData } =
		useGetUserPostsQuery(id!)

	if (isUserLoading || isPostsLoading) {
		return <Loading />
	}

	if (!user) {
		return <EmptyUser />
	}

	return (
		<>
			<UserContent user={user} />
			<PostsList
				posts={userPostsData}
				title={'Посты пользвователя:'}
				emptyDescription={'Посты пользователя не найдены!'}
				userID={id}
			/>
		</>
	)
}

export default UserPage
