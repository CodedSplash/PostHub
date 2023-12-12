import { Flex, Input, Select } from 'antd'
import { DefaultOptionType } from 'antd/es/select'
import { FC } from 'react'
import styles from './Filters.module.css'

interface IFiltersProps {
	searchPlaceholder: string
	handleSearch: (value: string) => void
	handleChange: (value: string) => void
	filteringOptions: DefaultOptionType[]
}

const { Search } = Input

const Filters: FC<IFiltersProps> = ({
	searchPlaceholder,
	handleSearch,
	handleChange,
	filteringOptions,
}) => {
	return (
		<Flex align={'center'} gap={'small'}>
			<Search
				placeholder={searchPlaceholder}
				onSearch={handleSearch}
				allowClear
			/>
			<Select
				placeholder={'Фильтры'}
				options={filteringOptions}
				onChange={handleChange}
				className={styles.select}
			/>
		</Flex>
	)
}

export default Filters
