import { Alert, Button, Card, Flex, Form, Space, Typography } from 'antd'
import { FC } from 'react'
import NicknameInput from '../../ui/NicknameInput/NicknameInput'
import EmailInput from '../../ui/EmailInput/EmailInput'
import PasswordInput from '../../ui/PasswordInput/PasswordInput'
import { Link } from 'react-router-dom'
import styles from './RegisterForm.module.css'
import useRegister from '../../../hooks/useRegister'

const RegisterForm: FC = () => {
	const { isError, registerError, isLoading, registerHandle, location } =
		useRegister()

	return (
		<Flex justify="center" align="center" className={styles.register}>
			<Card title="Регистрация" className={styles.card}>
				<Space direction={'vertical'} size={'small'} className={styles.space}>
					<Form name={'register'} onFinish={registerHandle}>
						<NicknameInput />
						<EmailInput />
						<PasswordInput name={'password'} placeholder={'Пароль'} />
						<PasswordInput
							name={'confirmPassword'}
							placeholder={'Подтверждение пароля'}
						/>
						<Button type={'primary'} htmlType={'submit'} loading={isLoading}>
							Зарегистрироваться
						</Button>
					</Form>
					<Typography.Text>
						Есть акаунта?
						<Link to={'/login'} state={location.state}>
							Войдите
						</Link>
					</Typography.Text>
					{isError && <Alert message={registerError} type={'error'} />}
				</Space>
			</Card>
		</Flex>
	)
}

export default RegisterForm
