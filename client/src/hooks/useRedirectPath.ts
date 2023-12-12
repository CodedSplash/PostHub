import { useLocation } from 'react-router-dom'

const useRedirectPath = (anotherPath: string) => {
	const location = useLocation()

	return location.state?.from?.pathname || anotherPath
}

export default useRedirectPath
