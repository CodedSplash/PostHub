import { Spin } from 'antd'
import { FC } from 'react'
import { createPortal } from 'react-dom'
import styles from './Loading.module.css'

const Loading: FC = () => {
	return createPortal(
		<div className={styles.loadingContainer}>
			<Spin size={'large'} />
		</div>,
		document.body
	)
}

export default Loading
