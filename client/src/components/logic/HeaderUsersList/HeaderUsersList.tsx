import { Flex, Typography } from 'antd'
import { FC } from 'react'
import { DefaultOptionType } from 'antd/es/select'
import Filters from '../Filters/Filters'

interface IHeaderUsersListProps {
	title: string
	filters?: boolean
	handleSearch: (value: string) => void
	handleChange: (value: string) => void
}

const options: DefaultOptionType[] = [
	{ value: 'sortByNickname', label: 'Сортировать по нику' },
	{ value: 'sortByDateCreated', label: 'Сортировать по дате регистрации' },
]

const HeaderUsersList: FC<IHeaderUsersListProps> = ({
	title,
	filters,
	handleChange,
	handleSearch,
}) => {
	return (
		<Flex justify={'space-between'} align={'center'}>
			<Typography.Title level={3}>{title}</Typography.Title>
			{filters ? (
				<Filters
					searchPlaceholder={'Поиск постов...'}
					handleSearch={handleSearch}
					handleChange={handleChange}
					filteringOptions={options}
				/>
			) : null}
		</Flex>
	)
}

export default HeaderUsersList
