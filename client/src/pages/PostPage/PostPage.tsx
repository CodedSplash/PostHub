import { Flex, Space } from 'antd'
import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useGetPostQuery } from '../../servicies/PostService'
import Loading from '../../components/ui/Loading/Loading'
import PostPageHeader from '../../components/ui/PostPageHeader/PostPageHeader'
import PostPageContent from '../../components/ui/PostPageContent/PostPageContent'
import PostCardDropDown from '../../components/logic/PostCardDropDown/PostCardDropDown'
import RetryPost from '../../components/logic/RetryPost/RetryPost'
import styles from './PostPage.module.css'

const PostPage: FC = () => {
	const { id } = useParams()

	const { data: post, isLoading: isPostLoading, refetch } = useGetPostQuery(id!)

	if (isPostLoading) {
		return <Loading />
	}

	return post ? (
		<Flex
			justify={'space-between'}
			align={'start'}
			gap={'small'}
			className={styles.post}
		>
			<Space direction={'vertical'} size={'small'}>
				<PostPageHeader post={post} />
				<PostPageContent post={post} />
			</Space>
			<PostCardDropDown postID={post.data._id} userIDPost={post.data.author} />
		</Flex>
	) : (
		<RetryPost refetch={refetch} />
	)
}

export default PostPage
