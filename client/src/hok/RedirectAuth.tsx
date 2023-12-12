import { FC, ReactNode } from 'react'
import { useAppSelector } from '../hooks/useStoreHooks'
import { selectIsAuthState } from '../store/slices/auth/AuthSlice'
import { Navigate, useLocation } from 'react-router-dom'

interface IRedirectAuthProps {
	children: ReactNode
}

const RedirectAuth: FC<IRedirectAuthProps> = ({ children }) => {
	const location = useLocation()

	const isAuth = useAppSelector(selectIsAuthState)

	if (isAuth) {
		return <Navigate to={location.state?.from.pathname} replace />
	}

	return children
}

export default RedirectAuth
