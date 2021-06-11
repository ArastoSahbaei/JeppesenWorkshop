import Axios from 'axios'
import MockAPIService from '../shared/images/api/service/MockAPIService'

export const RESTView = () => {

	const createUser = async () => {
		try {
			await Axios.post('https://60ba330980400f00177b7d6a.mockapi.io/api/v1/users', { name: 'Arasto' })
		} catch (error) {
			console.error(error)
		}
	}

	const getUsers = async () => {
		try {
			const { data } = await MockAPIService.getAllUsers()
			console.log(data)
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div>
			<h1>1. API CALLS</h1>
			<h1>2. Structuring API calls</h1>
			<h1>3. Mocking API calls</h1>
			<button onClick={() => createUser()}>create</button>
			<button onClick={() => getUsers()}>get</button>
		</div>
	)
}


/*
	Easiest way to mock API: https://www.mockapi.io/
	Mocking AXIOS: https://www.npmjs.com/package/axios-mock-adapter
*/