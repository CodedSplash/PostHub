import { useRefreshMutation } from './servicies/AuthService'
import { useLayoutEffect } from 'react'
import TokenService from './servicies/TokenService'
import Loading from './components/ui/Loading/Loading'
import RoutesList from './components/logic/RoutesList/RoutesList'

function App() {
	const [refresh, { isLoading }] = useRefreshMutation()

	useLayoutEffect(() => {
		if (TokenService.getToken()) {
			refresh()
		}
	}, [refresh])

	if (isLoading) {
		return <Loading />
	}

	return <RoutesList />
}

export default App
