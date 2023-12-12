import { Empty } from 'antd'
import { FC } from 'react'
import styles from './EmptyUser.module.css'

const EmptyUser: FC = () => {
	return (
		<div className={styles.empryContainer}>
			<Empty description={<span>Пользователь не найден!</span>} />
		</div>
	)
}

export default EmptyUser
