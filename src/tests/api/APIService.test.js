import MockAPIService from '../../shared/images/api/service/MockAPIService'

test('get all users', async () => {
	const { data } = await MockAPIService.getAllUsers()
	expect(data).toEqual([
		{ name: 'arasto' },
		{ name: 'arasto2' },
		{ name: 'arasto3' },
	])
})




