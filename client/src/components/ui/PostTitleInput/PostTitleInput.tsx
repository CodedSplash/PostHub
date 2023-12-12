import { Form, Input } from 'antd'
import { FC } from 'react'
const PostTitleInput: FC = () => {
	return (
		<Form.Item
			name={'title'}
			hasFeedback
			validateDebounce={500}
			rules={[
				{
					required: true,
					message: 'Введите заголовок поста',
				},
				{
					min: 15,
					max: 64,
					message: 'Введите заголовок поста от 15 до 255 символов',
				},
			]}
		>
			<Input
				placeholder={'Введите заголовок поста'}
				size={'large'}
				minLength={15}
				maxLength={64}
				showCount
			/>
		</Form.Item>
	)
}

export default PostTitleInput
