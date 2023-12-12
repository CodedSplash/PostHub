import { Form, Input } from 'antd'
import { FC } from 'react'

const PostContentTextArea: FC = () => {
	return (
		<Form.Item
			name={'content'}
			validateDebounce={500}
			rules={[
				{
					required: true,
					message: 'Введите текст поста',
				},
				{
					min: 50,
					max: 5000,
					message: 'Введите текст поста от 50 до 5000 символов',
				},
			]}
		>
			<Input.TextArea
				placeholder={'Введите текст поста'}
				size={'large'}
				rows={5}
				minLength={50}
				maxLength={5000}
				showCount
				allowClear
				style={{ resize: 'none' }}
			/>
		</Form.Item>
	)
}

export default PostContentTextArea
