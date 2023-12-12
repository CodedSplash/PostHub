import { Space } from 'antd'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
	selectIsAuthState,
	selectUserState,
} from '../../../store/slices/auth/AuthSlice'
import { useLogoutMutation } from '../../../servicies/AuthService'
import { useAppSelector } from '../../../hooks/useStoreHooks'

const AuthLinks: FC = () => {
	const [logout] = useLogoutMutation()

	const isAuth = useSelector(selectIsAuthState)

	const user = useAppSelector(selectUserState)

	return (
		<Space>
			{!isAuth ? (
				<>
					<Link to={'/login'}>Вход</Link>
					<Link to={'/register'}>Регистрация</Link>
				</>
			) : (
				<>
					<Link to={`/users/${user.id}`}>Мой аккаунт</Link>
					<Link to={'/'} onClick={() => logout()}>
						Выход
					</Link>
				</>
			)}
		</Space>
	)
}

export default AuthLinks
