import mongoose from 'mongoose'

interface IUser {
	_id: mongoose.Types.ObjectId
	nickname: string
	roles: string[]
	dateCreated: Date
}

export default IUser
