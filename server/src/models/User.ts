import { Schema, model } from 'mongoose'

const schema = new Schema({
	nickname: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	roles: {
		type: [String],
		default: ['user'],
	},
	dateCreated: {
		type: Date,
		default: Date.now(),
	},
})

export default model('user', schema)
