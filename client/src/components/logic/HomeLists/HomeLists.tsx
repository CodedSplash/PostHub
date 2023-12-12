import { FC } from 'react'
import HomePostsList from '../HomePostsList/HomePostsList'
import HomeUsersList from '../HomeUsersList/HomeUsersList'
import { useGetLastPostsQuery } from '../../../servicies/PostsService'
import { useGetLastUsersQuery } from '../../../servicies/UsersService'
import Loading from '../../ui/Loading/Loading'

const HomeLists: FC = () => {
	const { data: lastPosts, isLoading: isLastPostsLoading } =
		useGetLastPostsQuery()
	const { data: lastUsers, isLoading: isLastUsersLoading } =
		useGetLastUsersQuery()

	if (isLastPostsLoading && isLastUsersLoading) {
		return <Loading />
	}

	return (
		<>
			<HomePostsList
				posts={lastPosts?.data}
				emptyDescription={'Посты не найдены!'}
			/>
			<HomeUsersList
				users={lastUsers?.data}
				emptyDescription={'Пользователи не найдены!'}
			/>
		</>
	)
}

export default HomeLists
