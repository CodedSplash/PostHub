import { PlusOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const AddPostButton: FC = () => {
	const navigate = useNavigate()
	const location = useLocation()

	return (
		<Tooltip title={'Создать пост'}>
			<Button
				shape={'circle'}
				icon={<PlusOutlined />}
				onClick={() => navigate('/posts/create', { state: { from: location } })}
			/>
		</Tooltip>
	)
}

export default AddPostButton
