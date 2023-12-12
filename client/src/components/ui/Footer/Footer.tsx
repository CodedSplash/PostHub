import { FC } from 'react'
import { Layout as AntdLayout } from 'antd'
import styles from './Footer.module.css'

const { Footer: AntdFooter } = AntdLayout

const classNames = ['container', styles.footerContainer].join(' ')

const Footer: FC = () => {
	return (
		<AntdFooter>
			<div className={classNames}>
				<p>©️CodedSplash</p>
			</div>
		</AntdFooter>
	)
}

export default Footer
