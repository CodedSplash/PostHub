import { FC } from 'react'
import styles from './HomeUsersList.module.css'
import { IUser } from '../../../models/User.model'
import { Divider, Empty, Space, Typography } from 'antd'
import UserCard from '../../ui/UserCard/UserCard'

interface IHomeUsersListProps {
	users: IUser[] | undefined
	emptyDescription: string
}

const HomeUsersList: FC<IHomeUsersListProps> = ({
	users,
	emptyDescription,
}) => {
	return (
		<div className={styles.content}>
			<Typography.Title level={3}>
				Последние зарегистрированные пользователи
			</Typography.Title>
			<Divider type={'horizontal'} />
			{users?.length ? (
				<Space direction={'vertical'} size={'middle'} className={styles.space}>
					{users.map((user) => (
						<UserCard user={user} key={user.id} />
					))}
				</Space>
			) : (
				<Empty description={<span>{emptyDescription}</span>} />
			)}
		</div>
	)
}

export default HomeUsersList
