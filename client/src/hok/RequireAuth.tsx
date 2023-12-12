import { FC, ReactNode } from 'react'
import { useAppSelector } from '../hooks/useStoreHooks'
import { selectIsAuthState } from '../store/slices/auth/AuthSlice'
import { Navigate, useLocation } from 'react-router-dom'

interface IRequireAuthProps {
	children: ReactNode
}

const RequireAuth: FC<IRequireAuthProps> = ({ children }) => {
	const location = useLocation()
	const isAuth = useAppSelector(selectIsAuthState)

	if (!isAuth) {
		return <Navigate to="/login" replace state={{ from: location }} />
	}

	return children
}

export default RequireAuth
