import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
	rest.get('https://60ba330980400f00177b7d6a.mockapi.io/api/v1/users', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([
				{ username: 'arasto' },
				{ username: 'arasto2' },
				{ username: 'arasto3' },
			])
		)
	}),
	rest.get('*', (req, res, ctx) => {
		console.error(`Please add request handler for ${req.url.toString()}`)
		return res(
			ctx.status(500),
			ctx.json({ error: 'Please add request handler' })
		)
	})
)

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

export { server, rest }