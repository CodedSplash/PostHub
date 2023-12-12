import $api from '../store/api'
import { IPost, IPostCreate, IPostUpdate } from '../models/Post.model'
import ResponseData from '../models/ResponseData.model'

const postAPI = $api.injectEndpoints({
	endpoints: (builder) => ({
		getPost: builder.query<ResponseData<IPost>, string>({
			query: (id) => ({
				url: `/posts/${id}`,
			}),
			providesTags: ['Post'],
		}),
		createPost: builder.mutation<ResponseData<IPost>, IPostCreate>({
			query: (body) => ({
				url: '/posts',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Post', 'Posts', 'lastPosts'],
		}),
		updatePost: builder.mutation<ResponseData<IPost>, IPostUpdate>({
			query: ({ id, body }) => ({
				url: `/posts/${id}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['Post', 'Posts', 'lastPosts'],
		}),
		deletePost: builder.mutation<ResponseData<IPost>, string>({
			query: (id) => ({
				url: `/posts/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Post', 'Posts', 'lastPosts'],
		}),
	}),
})

export const {
	useCreatePostMutation,
	useDeletePostMutation,
	useGetPostQuery,
	useUpdatePostMutation,
} = postAPI

export default postAPI
