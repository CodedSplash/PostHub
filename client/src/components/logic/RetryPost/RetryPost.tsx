import { Button, Empty, Flex } from 'antd'
import { FC } from 'react'
import styles from './RetryPost.module.css'

interface IRetryPostProps {
	refetch: () => void
}

const RetryPost: FC<IRetryPostProps> = ({ refetch }) => {
	return (
		<div className={styles.container}>
			<Empty
				description={
					<>
						<Flex vertical align={'center'} gap={'small'}>
							<span>Не удалось загрузить пост!</span>
							<Button type={'default'} onClick={refetch}>
								Повторить запрос
							</Button>
						</Flex>
					</>
				}
			/>
		</div>
	)
}

export default RetryPost
