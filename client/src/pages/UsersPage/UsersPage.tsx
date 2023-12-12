import { FC } from 'react'
import Loading from '../../components/ui/Loading/Loading'
import { useGetUsersQuery } from '../../servicies/UsersService'
import UsersList from '../../components/logic/UsersList/UsersList'

const UsersPage: FC = () => {
	const { data: users, isLoading } = useGetUsersQuery()

	if (isLoading) {
		return <Loading />
	}

	return (
		<UsersList
			title={'Пользователи'}
			emptyDescription={'Пользователи не найдены!'}
			users={users}
		/>
	)
}

export default UsersPage
