import { Avatar, Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import { FC } from 'react'
import { IUser } from '../../../models/User.model'
import { Link } from 'react-router-dom'

interface IUserCardProps {
	user: IUser
}

const UserCard: FC<IUserCardProps> = ({ user }) => {
	return (
		<Link to={`/users/${user.id}`}>
			<Card hoverable>
				<Meta
					avatar={<Avatar src={'/img/default-avatar.png'} />}
					title={user.nickname}
					description={new Date(user.dateCreated).toUTCString()}
				/>
			</Card>
		</Link>
	)
}

export default UserCard
