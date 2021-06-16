import Axios from 'axios'
import { useFetch } from '../hooks/useFetch'
import MockAPIService from '../shared/images/api/service/MockAPIService'

export const RESTView = () => {
	const { data, loading, error } = useFetch(MockAPIService.getAllUsers)

	const createUser = async () => {
		try {
			await Axios.post('https://60ba330980400f00177b7d6a.mockapi.io/api/v1/users', { name: 'Arasto' })
		} catch (error) {
			console.error(error)
		}
	}

	/* 	const getUsers = async () => {
			try {
				const { data } = await MockAPIService.getAllUsers()
				console.log(data)
			} catch (error) {
				console.error(error)
			}
		} */

	const displayData = () => {
		return (
			data.map((element) => <h1 key={element.user}>{element.name}</h1>)
		)
	}

	return (
		loading
			? <h1>LOADING..</h1>
			:
			<div>
				{displayData()}
				<button onClick={() => createUser()}>create</button>
				{/* <button onClick={() => getUsers()}>get</button> */}
			</div>
	)
}


/*
	Easiest way to mock API: https://www.mockapi.io/
	Mocking AXIOS: https://www.npmjs.com/package/axios-mock-adapter
*/