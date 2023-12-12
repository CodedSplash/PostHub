import { Form, Input } from 'antd'
import { FC } from 'react'

const EmailInput: FC = () => {
	return (
		<Form.Item
			name={'email'}
			hasFeedback
			validateDebounce={500}
			rules={[
				{
					type: 'email',
					message: 'Введите правильный E-mail!',
				},
				{
					required: true,
					message: 'Введите ваш E-mail!',
				},
			]}
		>
			<Input placeholder={'Почта'} size={'large'} />
		</Form.Item>
	)
}

export default EmailInput
