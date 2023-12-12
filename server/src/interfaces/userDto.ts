import mongoose from 'mongoose'

interface IUserDto {
	id: mongoose.Types.ObjectId
	nickname: string
	roles: string[]
	dateCreated: Date
}

export default IUserDto
