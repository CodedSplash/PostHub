import { FC } from 'react'
import { IUser } from '../../../models/User.model'
import { Empty, Space } from 'antd'
import UserCard from '../../ui/UserCard/UserCard'
import styles from './ContentUsersList.module.css'

interface IContentUsersListProps {
	users: IUser[]
	emptyDescription: string
}

const ContentUsersList: FC<IContentUsersListProps> = ({
	users,
	emptyDescription,
}) => {
	return users.length ? (
		<Space direction={'vertical'} size={'middle'} className={styles.space}>
			{users.map((user) => (
				<UserCard key={user.id} user={user} />
			))}
		</Space>
	) : (
		<Empty
			description={<span>{emptyDescription}</span>}
			className={styles.empty}
		/>
	)
}

export default ContentUsersList
