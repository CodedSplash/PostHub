import { PayloadAction, createListenerMiddleware } from '@reduxjs/toolkit'
import authAPI from '../../servicies/AuthService'
import { IResponseAuth } from '../../models/Auth.model'
import TokenService from '../../servicies/TokenService'

const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
	matcher: authAPI.endpoints.login.matchFulfilled,
	effect: (action: PayloadAction<IResponseAuth>, listenerApi) => {
		listenerApi.cancelActiveListeners()

		const token = action.payload.accessToken

		if (token) {
			TokenService.saveToken(token)
		}
	},
})

listenerMiddleware.startListening({
	matcher: authAPI.endpoints.register.matchFulfilled,
	effect: (action: PayloadAction<IResponseAuth>, listenerApi) => {
		listenerApi.cancelActiveListeners()

		const token = action.payload.accessToken

		if (token) {
			TokenService.saveToken(token)
		}
	},
})

listenerMiddleware.startListening({
	matcher: authAPI.endpoints.logout.matchFulfilled,
	effect: (_, listenerApi) => {
		listenerApi.cancelActiveListeners()

		TokenService.removeToken()
	},
})

listenerMiddleware.startListening({
	matcher: authAPI.endpoints.refresh.matchFulfilled,
	effect: (action: PayloadAction<IResponseAuth>, listenerApi) => {
		listenerApi.cancelActiveListeners()
		const token = action.payload.accessToken

		if (token) {
			TokenService.saveToken(token)
		}
	},
})

export default listenerMiddleware
