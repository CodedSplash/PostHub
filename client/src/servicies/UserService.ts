import { IUser } from '../models/User.model'
import $api from '../store/api'
import ResponseData from '../models/ResponseData.model'

const userAPI = $api.injectEndpoints({
	endpoints: (builder) => ({
		getUser: builder.query<ResponseData<IUser>, string>({
			query: (id) => ({
				url: `/auth/user/${id}`,
			}),
		}),
	}),
})

export const { useGetUserQuery } = userAPI

export default userAPI
