import Axios from 'axios'

const MockAPI = Axios.create({
	baseURL: 'https://60ba330980400f00177b7d6a.mockapi.io/api/v1',
	headers: { 'Content-Type': 'application/json' }
})

export default MockAPI