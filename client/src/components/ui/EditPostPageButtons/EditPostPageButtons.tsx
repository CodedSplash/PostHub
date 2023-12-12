import { Button, Space } from 'antd'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import useRedirectPath from '../../../hooks/useRedirectPath'

interface IEditPostPageButtonsProps {
	isUpdatePostLoading: boolean
}

const EditPostPageButtons: FC<IEditPostPageButtonsProps> = ({
	isUpdatePostLoading,
}) => {
	const navigate = useNavigate()

	const redirectPath = useRedirectPath('/posts')

	return (
		<Space direction={'horizontal'} size={'small'}>
			<Button
				type={'primary'}
				htmlType={'submit'}
				loading={isUpdatePostLoading}
			>
				Сохранить изменения
			</Button>
			<Button
				type={'default'}
				onClick={() => navigate(redirectPath)}
				disabled={isUpdatePostLoading}
			>
				Отменить
			</Button>
		</Space>
	)
}

export default EditPostPageButtons
