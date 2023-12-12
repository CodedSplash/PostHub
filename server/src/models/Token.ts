import { Schema, model } from 'mongoose'

const schema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'user',
	},
	refreshToken: {
		type: String,
		required: true,
	},
})

export default model('token', schema)
