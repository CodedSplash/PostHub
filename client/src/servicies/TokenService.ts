class TokenService {
	getToken() {
		return localStorage.getItem('token') as string
	}

	saveToken(token: string) {
		localStorage.setItem('token', token)
	}

	removeToken() {
		localStorage.removeItem('token')
	}
}

export default new TokenService()
