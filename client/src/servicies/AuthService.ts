import $api from '../store/api'
import {
	ILoginReq,
	IRegistrationReq,
	IResponseAuth,
} from '../models/Auth.model'

const authAPI = $api.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<IResponseAuth, ILoginReq>({
			query: (body) => ({
				url: '/auth/login',
				method: 'POST',
				body,
			}),
		}),
		register: builder.mutation<IResponseAuth, IRegistrationReq>({
			query: (body) => ({
				url: '/auth/registration',
				method: 'POST',
				body,
			}),
		}),
		refresh: builder.mutation<IResponseAuth, void>({
			query: () => ({
				url: '/auth/refresh',
				method: 'POST',
			}),
			invalidatesTags: ['Auth'],
		}),
		logout: builder.mutation<string, void>({
			query: () => ({
				url: '/auth/logout',
				method: 'POST',
			}),
			invalidatesTags: ['Auth'],
		}),
	}),
})

export const {
	useLoginMutation,
	useLogoutMutation,
	useRefreshMutation,
	useRegisterMutation,
} = authAPI

export default authAPI
