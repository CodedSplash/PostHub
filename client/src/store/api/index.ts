import {
	createApi,
	fetchBaseQuery,
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query/react'
import TokenService from '../../servicies/TokenService'
import { IResponseAuth } from '../../models/Auth.model'

export const baseUrl = 'http://localhost:3000/api'

const baseQuery = fetchBaseQuery({
	baseUrl,
	prepareHeaders: (headers) => {
		const token = TokenService.getToken()

		if (token) {
			headers.set('authorization', `Bearer ${token}`)
		}

		return headers
	},
	credentials: 'include',
	mode: 'cors',
})

const customFetchBase: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions)

	if (result.error?.status === 401) {
		const refreshResult = await baseQuery(
			{ url: '/auth/refresh', method: 'POST' },
			api,
			extraOptions
		)

		if (refreshResult.data && refreshResult.error?.status !== 403) {
			TokenService.saveToken((refreshResult.data as IResponseAuth).accessToken)

			result = await baseQuery(args, api, extraOptions)
		} else {
			await baseQuery({ url: '/auth/logout' }, api, extraOptions)
		}
	}

	return result
}

const $api = createApi({
	reducerPath: 'mainApi',
	tagTypes: ['Post', 'Posts', 'Users', 'Auth', 'lastPosts', 'lastUsers'],
	baseQuery: customFetchBase,
	endpoints: () => ({}),
})

export default $api
