import { Alert, Button, Card, Flex, Form, Space, Typography } from 'antd'
import { FC } from 'react'
import EmailInput from '../../ui/EmailInput/EmailInput'
import PasswordInput from '../../ui/PasswordInput/PasswordInput'
import { Link } from 'react-router-dom'
import useLogin from '../../../hooks/useLogin'
import styles from './LoginForm.module.css'

const LoginForm: FC = () => {
	const { isError, isLoading, loginError, loginHandler, location } = useLogin()

	return (
		<Flex justify="center" align="center" className={styles.loginContainer}>
			<Card title="Вход" className={styles.card}>
				<Space direction={'vertical'} size={'small'} className={styles.space}>
					<Form name={'login'} onFinish={loginHandler}>
						<EmailInput />
						<PasswordInput name={'password'} placeholder={'Пароль'} />
						<Button type={'primary'} htmlType={'submit'} loading={isLoading}>
							Войти
						</Button>
					</Form>
					<Typography.Text>
						Нет акаунта?{' '}
						<Link to={'/register'} state={location.state}>
							Зарегистрируйся
						</Link>
					</Typography.Text>
					{isError && <Alert message={loginError} type={'error'} />}
				</Space>
			</Card>
		</Flex>
	)
}

export default LoginForm
