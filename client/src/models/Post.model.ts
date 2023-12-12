export interface IPost {
	_id: string
	title: string
	content: string
	author: string
	dateCreated: Date
}

export interface IPostCreate {
	title: string
	content: string
	author: string
}

export interface IPostUpdate {
	id: string
	body: {
		title: string
		content: string
		author: string
	}
}
