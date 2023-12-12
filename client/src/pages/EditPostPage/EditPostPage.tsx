import { FC } from 'react'
import Loading from '../../components/ui/Loading/Loading'
import { useGetPostQuery } from '../../servicies/PostService'
import EditPostForm from '../../components/business/EditPostForm/EditPostForm'
import { useParams } from 'react-router-dom'

const EditPostPage: FC = () => {
	const { id } = useParams()

	const { data: post, isLoading: isPostLoading } = useGetPostQuery(id!)

	if (isPostLoading) {
		return <Loading />
	}

	return (
		<EditPostForm
			postTitle={post?.data.title}
			postContent={post?.data.content}
		/>
	)
}

export default EditPostPage
