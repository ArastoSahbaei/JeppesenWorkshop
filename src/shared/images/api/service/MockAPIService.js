import http from '../MockAPI'

const getAllUsers = () => {
	return http.get('/users')
}

export default {
	getAllUsers
}