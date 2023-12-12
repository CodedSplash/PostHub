import { useMemo } from 'react'
import { IUser } from './User.model'

const filtered = (users: IUser[], typeFiltering: string) => {
	const usersCopy = [...users]

	switch (typeFiltering) {
		case 'sortByNickname':
			return usersCopy.sort((a, b) => a.nickname.localeCompare(b.nickname))

		case 'sortByDateCreated':
			return usersCopy.sort(
				(a, b) =>
					new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
			)

		default:
			return users
	}
}

const found = (filteredUsers: IUser[], searchValue: string) => {
	if (searchValue) {
		return filteredUsers.filter((filteredUser) =>
			filteredUser.nickname.toLowerCase().includes(searchValue.toLowerCase())
		)
	}

	return filteredUsers
}

const useFilteringUsers = (
	users: IUser[],
	typeFiltering: string,
	searchValue: string
) => {
	const filteredUser = useMemo(
		() => filtered(users, typeFiltering),
		[users, typeFiltering]
	)

	const foundUser = useMemo(
		() => found(filteredUser, searchValue),
		[filteredUser, searchValue]
	)

	return foundUser
}

export default useFilteringUsers
