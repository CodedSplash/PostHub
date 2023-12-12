import { useState } from 'react'
import useFilteringUsers from '../models/FilteringUsers'
import ResponseData from '../models/ResponseData.model'
import { IUser } from '../models/User.model'

const useUsersList = (users: ResponseData<IUser[]> | undefined) => {
	const [searchValue, setSearchValue] = useState('')
	const [typeFiltering, setTypeFiltering] = useState('')

	const filteredUsers = useFilteringUsers(
		users ? users.data : [],
		typeFiltering,
		searchValue
	)

	const handleSearch = (value: string) => {
		setSearchValue(value)
	}
	const handleChangeFilter = (value: string) => {
		setTypeFiltering(value)
	}

	return { filteredUsers, handleSearch, handleChangeFilter }
}

export default useUsersList
