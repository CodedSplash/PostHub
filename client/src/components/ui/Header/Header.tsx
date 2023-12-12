import { FC } from 'react'
import { Layout as AntdLayout, Flex, Space } from 'antd'
import { Link } from 'react-router-dom'
import AuthLinks from '../AuthLinks/AuthLinks'

const { Header: AntdHeader } = AntdLayout

const Header: FC = () => {
	return (
		<AntdHeader>
			<div className="container">
				<Flex justify="space-between" align="center">
					<Space>
						<Link to="/">Главная</Link>
						<Link to="/users">Пользователи</Link>
						<Link to="/posts">Посты</Link>
					</Space>
					<AuthLinks />
				</Flex>
			</div>
		</AntdHeader>
	)
}

export default Header
