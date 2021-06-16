import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
	rest.get('https://60ba330980400f00177b7d6a.mockapi.io/api/v1/users', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([
				{ name: 'arasto' },
				{ name: 'arasto2' },
				{ name: 'arasto3' },
			])
		)
	}),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

export { server, rest }