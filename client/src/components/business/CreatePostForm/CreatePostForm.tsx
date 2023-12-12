import { FC } from 'react'
import useCreatePostPage from '../../../hooks/useCreatePost'
import { Alert, Card, Flex, Form, Space } from 'antd'
import PostTitleInput from '../../ui/PostTitleInput/PostTitleInput'
import PostContentTextArea from '../../ui/PostContentTextArea/PostContentTextArea'
import CreatePostButtons from '../../ui/CreatePostButtons/CreatePostButtons'
import styles from './CreatePostForm.module.css'

const CreatePostForm: FC = () => {
	const { createPostError, createPostHandler, isError, isLoading } =
		useCreatePostPage()

	return (
		<Flex justify="center" align="center" className={styles.createPost}>
			<Card title="Создание поста" className={styles.card}>
				<Space direction={'vertical'} size={'small'} className={styles.space}>
					<Form name={'createPost'} onFinish={createPostHandler}>
						<PostTitleInput />
						<PostContentTextArea />
						<CreatePostButtons loading={isLoading} />
					</Form>
					{isError && <Alert type={'error'} description={createPostError} />}
				</Space>
			</Card>
		</Flex>
	)
}

export default CreatePostForm
