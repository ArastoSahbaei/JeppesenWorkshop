import MockAPIService from '../../shared/images/api/service/MockAPIService'

test('get all users', async () => {
	const { data, status } = await MockAPIService.getAllUsers()
	expect(data).toEqual([
		{ name: 'arasto' },
		{ name: 'arasto2' },
		{ name: 'arasto3' },
	])
	expect(status).toBe(200)
})




