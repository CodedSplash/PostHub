import IUser from '../interfaces/user'
import IUserDto from '../interfaces/userDto'

class UserDto implements IUserDto {
	id
	nickname
	roles
	dateCreated

	constructor(user: IUser | IUserDto) {
		this.id = '_id' in user ? user._id : user.id
		this.nickname = user.nickname
		this.roles = user.roles
		this.dateCreated = user.dateCreated
	}
}

export default UserDto
