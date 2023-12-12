import { Schema, model } from 'mongoose'

const scheme = new Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: 'user',
	},
	dateCreated: {
		type: Date,
		default: Date.now(),
	},
})

export default model('post', scheme)
