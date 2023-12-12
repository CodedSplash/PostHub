import { FC } from 'react'
import HeaderUsersList from '../HeaderUsersList/HeaderUsersList'
import { Divider } from 'antd'
import ContentUsersList from '../ContentUsersList/ContentUsersList'
import { IUser } from '../../../models/User.model'
import ResponseData from '../../../models/ResponseData.model'
import styles from './UsersList.module.css'
import useUsersList from '../../../hooks/useUsersList'

interface IUsersListProps {
	users: ResponseData<IUser[]> | undefined
	title: string
	emptyDescription: string
}

const UsersList: FC<IUsersListProps> = ({ users, title, emptyDescription }) => {
	const { filteredUsers, handleChangeFilter, handleSearch } =
		useUsersList(users)

	return (
		<div className={styles.container}>
			<HeaderUsersList
				title={title}
				filters={users?.data ? true : false}
				handleSearch={handleSearch}
				handleChange={handleChangeFilter}
			/>
			<Divider type={'horizontal'} />
			<ContentUsersList
				users={filteredUsers}
				emptyDescription={emptyDescription}
			/>
		</div>
	)
}

export default UsersList
