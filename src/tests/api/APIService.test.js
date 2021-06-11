import { server, rest } from './serverSetup'
import MockAPIService from '../../shared/images/api/service/MockAPIService'

test('get all users', async () => {
	const { data, status } = await MockAPIService.getAllUsers()
	expect(data).toEqual([
		{ username: 'arasto' },
		{ username: 'arasto2' },
		{ username: 'arasto3' },
	])
	expect(status).toEqual(200)
})




