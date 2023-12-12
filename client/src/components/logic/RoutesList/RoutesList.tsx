import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import routes from '../../../routes'
import Layout from '../../Layouts/Layout/Layout'

const RoutesList: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{routes.map((route) => (
					<Route
						key={route?.path || new Date().getTime()}
						path={route?.path || ''}
						index={route?.index || false}
						element={route.element}
					/>
				))}
			</Route>
		</Routes>
	)
}

export default RoutesList
