import { IUser } from './User.model'

export interface IAuthState {
	isAuth: boolean
	user: IUser
}

export interface IRegistrationReq {
	nickname: string
	email: string
	password: string
}

export interface IResponseAuth {
	accessToken: string
	refreshToken: string
	user: IUser
}

export interface IResponseError {
	status: number
	message: string
}

export interface ILoginReq {
	email: string
	password: string
}
