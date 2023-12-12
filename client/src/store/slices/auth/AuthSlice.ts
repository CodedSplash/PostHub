import { createSlice } from '@reduxjs/toolkit'
import { IAuthState } from '../../../models/Auth.model'
import authAPI from '../../../servicies/AuthService'
import { RootState } from '../../store'

const initialState: IAuthState = {
	isAuth: false,
	user: {
		id: '',
		nickname: '',
		roles: [],
		dateCreated: Date.now(),
	},
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(
			authAPI.endpoints.login.matchFulfilled,
			(state, action) => {
				state.user = action.payload.user
				state.isAuth = true
			}
		)
		builder.addMatcher(
			authAPI.endpoints.register.matchFulfilled,
			(state, action) => {
				state.user = action.payload.user
				state.isAuth = true
			}
		)
		builder.addMatcher(
			authAPI.endpoints.refresh.matchFulfilled,
			(state, action) => {
				state.user = action.payload.user
				state.isAuth = true
			}
		)
		builder.addMatcher(authAPI.endpoints.logout.matchFulfilled, () => {
			return initialState
		})
	},
})

export const selectIsAuthState = (state: RootState) => state.auth.isAuth

export const selectUserState = (state: RootState) => state.auth.user

export default authSlice.reducer
