import { FC } from 'react'
import { IUser } from '../../../models/User.model'
import { Avatar, Space, Typography } from 'antd'
import ResponseData from '../../../models/ResponseData.model'
import styles from './UserContent.module.css'

interface IUserContentProps {
	user: ResponseData<IUser>
}

const UserContent: FC<IUserContentProps> = ({ user }) => {
	return (
		<Space direction={'horizontal'} size={'large'} className={styles.space}>
			<Avatar src={'/img/default-avatar.png'} size={150} />
			<div>
				<Typography.Title>{user!.data.nickname}</Typography.Title>
				<Typography.Paragraph>
					Дата создания: {new Date(user!.data.dateCreated).toUTCString()}
				</Typography.Paragraph>
			</div>
		</Space>
	)
}

export default UserContent
