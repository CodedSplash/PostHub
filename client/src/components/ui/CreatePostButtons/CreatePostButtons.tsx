import { Button, Space } from 'antd'
import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface ICreatePostButtonsProps {
	loading: boolean
}

const CreatePostButtons: FC<ICreatePostButtonsProps> = ({ loading }) => {
	const location = useLocation()
	const navigate = useNavigate()

	const redirectPatch = location.state?.from?.pathname || '/posts'

	return (
		<Space direction={'horizontal'} size={'small'}>
			<Button type={'primary'} htmlType={'submit'} loading={loading}>
				Создать пост
			</Button>
			<Button
				type={'default'}
				onClick={() => navigate(redirectPatch)}
				disabled={loading}
			>
				Отмена
			</Button>
		</Space>
	)
}

export default CreatePostButtons
