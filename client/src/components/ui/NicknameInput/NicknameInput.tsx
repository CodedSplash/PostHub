import { Form, Input } from 'antd'
import { FC } from 'react'

const NicknameInput: FC = () => {
	return (
		<Form.Item
			name={'nickname'}
			hasFeedback
			validateDebounce={500}
			rules={[
				{
					min: 8,
					max: 32,
					message: 'Введите никнейм от 8 до 32 символов',
				},
				{
					required: true,
					message: 'Введите ваш никнейм',
				},
			]}
		>
			<Input placeholder={'Никнейм'} size={'large'} />
		</Form.Item>
	)
}

export default NicknameInput
