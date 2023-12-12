import { IUser } from '../models/User.model'
import $api from '../store/api'
import ResponseData from '../models/ResponseData.model'

const usersAPI = $api.injectEndpoints({
	endpoints: (builder) => ({
		getUsers: builder.query<ResponseData<IUser[]>, void>({
			query: () => ({
				url: '/auth/users',
			}),
			providesTags: ['Users'],
		}),
		getLastUsers: builder.query<ResponseData<IUser[]>, void>({
			query: () => ({
				url: '/auth/last-users',
			}),
			providesTags: ['Users'],
		}),
	}),
})

export const { useGetUsersQuery, useGetLastUsersQuery } = usersAPI

export default usersAPI
