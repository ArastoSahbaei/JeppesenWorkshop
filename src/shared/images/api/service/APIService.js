import http from '../API'

const searchRecipe = (search) => {
	return http.get(`/search/file?fileName=${search}`)
}

export default {
	searchRecipe
}