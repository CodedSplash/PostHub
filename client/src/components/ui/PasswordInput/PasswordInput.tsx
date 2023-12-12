import { FC } from 'react'
import { Form, Input } from 'antd'
import { NamePath } from 'antd/es/form/interface'

interface IPasswordInput {
	name: 'password' | 'confirmPassword'
	placeholder: string
	dependencies?: NamePath[]
}

const PasswordInput: FC<IPasswordInput> = ({
	name,
	dependencies,
	placeholder,
}) => {
	return (
		<Form.Item
			name={name}
			dependencies={dependencies}
			hasFeedback
			validateDebounce={500}
			rules={[
				({ getFieldValue }) => ({
					validator(_, value) {
						if (name === 'confirmPassword') {
							if (value?.length === 0) {
								return Promise.reject(new Error('Подтвердите пароль'))
							} else if (getFieldValue('password') !== value) {
								return Promise.reject(new Error('Пароль не совпадает'))
							}

							return Promise.resolve()
						}

						if (!value || getFieldValue('password') === value) {
							if (value?.length === 0) {
								return Promise.reject(new Error('Введите пароль'))
							} else if (value?.length < 8 || value?.length > 18) {
								return Promise.reject(
									new Error('Введите пароль от 8 до 18 символов')
								)
							}

							return Promise.resolve()
						}
					},
				}),
			]}
		>
			<Input.Password size={'large'} placeholder={placeholder} />
		</Form.Item>
	)
}

export default PasswordInput
