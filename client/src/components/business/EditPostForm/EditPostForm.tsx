import { FC } from 'react'
import useEditPost from '../../../hooks/useEditPost'
import { Alert, Card, Flex, Form, Space } from 'antd'
import PostTitleInput from '../../ui/PostTitleInput/PostTitleInput'
import PostContentTextArea from '../../ui/PostContentTextArea/PostContentTextArea'
import EditPostPageButtons from '../../ui/EditPostPageButtons/EditPostPageButtons'
import styles from './EditPostForm.module.css'

interface IEditPostFormProps {
	postTitle: string | undefined
	postContent: string | undefined
}

const EditPostForm: FC<IEditPostFormProps> = ({ postTitle, postContent }) => {
	const { isError, updateError, isUpdatePostLoading, updatePostHandle } =
		useEditPost()

	return (
		<Flex justify="center" align="center" className={styles.editPost}>
			<Card title="Редактирование поста" className={styles.card}>
				<Space direction={'vertical'} size={'small'} className={styles.space}>
					<Form
						name={'editPost'}
						initialValues={{
							title: postTitle,
							content: postContent,
						}}
						onFinish={updatePostHandle}
					>
						<PostTitleInput />
						<PostContentTextArea />
						<EditPostPageButtons isUpdatePostLoading={isUpdatePostLoading} />
					</Form>
					{isError && <Alert type={'error'} message={updateError} />}
				</Space>
			</Card>
		</Flex>
	)
}

export default EditPostForm
