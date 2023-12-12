import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout as AntdLayout } from 'antd'
import styles from './Layout.module.css'
import Footer from '../../ui/Footer/Footer'
import Header from '../../ui/Header/Header'

const { Content } = AntdLayout

const Layout: FC = () => {
	return (
		<AntdLayout>
			<Header />
			<Content className={styles.content}>
				<div className="container">
					<Outlet />
				</div>
			</Content>
			<Footer />
		</AntdLayout>
	)
}

export default Layout
