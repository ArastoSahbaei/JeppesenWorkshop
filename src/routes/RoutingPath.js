const landingView = '/'
const propsView = '/props'
const hooksView = '/hooks'
const dashboardView = '/dashboard'
const fileManagementView = '/filemanagement'
const RESTView = '/rest/api/'
const signInView = '/signin'
const fileDetailView = (id) => { return id ? `/file/${id}` : '/file/:id' }

export default {
	landingView,
	propsView,
	hooksView,
	dashboardView,
	fileManagementView,
	RESTView,
	signInView,
	fileDetailView
}