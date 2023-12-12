import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '../servicies/AuthService'
import { IRegistrationReq } from '../models/Auth.model'
import { isErrorFromBackend } from '../utils/isErrorFromBackend'
import useRedirectPath from './useRedirectPath'

const useRegister = () => {
	const navigate = useNavigate()
	const location = useLocation()

	const [registerError, setRegisterError] = useState('')

	const [register, { isLoading, isError }] = useRegisterMutation()

	const redirectPath = useRedirectPath('/')

	const registerHandle = async (data: IRegistrationReq) => {
		try {
			await register(data).unwrap()
			navigate(redirectPath)
		} catch (error) {
			if (isErrorFromBackend(error)) {
				setRegisterError(error.data.message)
			} else {
				setRegisterError('Неизвестная ошибка!')
			}
		}
	}

	return { registerError, isLoading, isError, registerHandle, location }
}

export default useRegister
