import { Flex, Typography } from 'antd'
import { FC } from 'react'
import AddPostButton from '../../ui/AddPostButton/AddPostButton'
import { useAppSelector } from '../../../hooks/useStoreHooks'
import { selectUserState } from '../../../store/slices/auth/AuthSlice'
import { DefaultOptionType } from 'antd/es/select'
import Filters from '../Filters/Filters'

interface IHeaderPostsListProps {
	title: string
	userID?: string
	addButton?: boolean
	filters?: boolean
	handleSearch: (value: string) => void
	handleChange: (value: string) => void
}

const options: DefaultOptionType[] = [
	{ value: 'sortByTitle', label: 'Сортировать по заголовку' },
	{ value: 'sortByContent', label: 'Сортировать по контенту' },
	{ value: 'sortByDate', label: 'Сортировать по дате' },
]

const HeaderPostsList: FC<IHeaderPostsListProps> = ({
	title,
	addButton,
	filters = true,
	userID,
	handleSearch,
	handleChange,
}) => {
	const user = useAppSelector(selectUserState)

	return (
		<Flex justify={'space-between'} align={'center'}>
			<Typography.Title level={3}>{title}</Typography.Title>
			<Flex align={'center'} gap={'small'}>
				{filters ? (
					<Filters
						searchPlaceholder={'Поиск постов...'}
						handleSearch={handleSearch}
						handleChange={handleChange}
						filteringOptions={options}
					/>
				) : null}
				{(userID && user.id === userID) || addButton ? <AddPostButton /> : null}
			</Flex>
		</Flex>
	)
}

export default HeaderPostsList
