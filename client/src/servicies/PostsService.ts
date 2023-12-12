import { IPost } from '../models/Post.model'
import $api from '../store/api'
import ResponseData from '../models/ResponseData.model'

const postsAPI = $api.injectEndpoints({
	endpoints: (builder) => ({
		getPosts: builder.query<ResponseData<IPost[]>, void>({
			query: () => ({
				url: '/posts',
			}),
			providesTags: ['Posts'],
		}),
		getUserPosts: builder.query<ResponseData<IPost[]>, string>({
			query: (id) => ({
				url: `/auth/user/posts/${id}`,
			}),
			providesTags: ['Posts'],
		}),
		getLastPosts: builder.query<ResponseData<IPost[]>, void>({
			query: () => ({
				url: '/posts/last',
			}),
			providesTags: ['lastPosts'],
		}),
	}),
})

export const { useGetPostsQuery, useGetUserPostsQuery, useGetLastPostsQuery } =
	postsAPI

export default postsAPI
