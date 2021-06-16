import http from '../API'

const searchRecipe = (search) => {
	return http.get(`/search/file?fileName=${search}`)
}

const getFile = (id) => {
	return http.get(`https://60ba330980400f00177b7d6a.mockapi.io/api/v1/file/${id}`)
}

export default {
	searchRecipe,
	getFile
}