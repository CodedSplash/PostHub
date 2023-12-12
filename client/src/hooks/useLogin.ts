import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../servicies/AuthService'
import { ILoginReq } from '../models/Auth.model'
import { isErrorFromBackend } from '../utils/isErrorFromBackend'
import useRedirectPath from './useRedirectPath'

const useLogin = () => {
	const navigate = useNavigate()
	const location = useLocation()

	const [loginError, setLoginError] = useState('')

	const [login, { isLoading, isError }] = useLoginMutation()

	const redirectPath = useRedirectPath('/')

	const loginHandler = async (data: ILoginReq) => {
		try {
			await login(data).unwrap()
			navigate(redirectPath)
		} catch (error) {
			if (isErrorFromBackend(error)) {
				setLoginError(error.data.message)
			} else {
				setLoginError('Неизвестная ошибка!')
			}
		}
	}

	return { isLoading, isError, loginError, loginHandler, location }
}

export default useLogin
