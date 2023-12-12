import { FC } from 'react'
import styles from './NotFoundPage.module.css'

const NotFoundPage: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.notFound}>
				<span className={styles.one}>4</span>
				<span className={styles.two}>0</span>
				<span className={styles.three}>4</span>
			</div>
			<p>Страница не найдена!</p>
		</div>
	)
}

export default NotFoundPage
