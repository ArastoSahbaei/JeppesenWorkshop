import { makeStringLowerCase } from '../../functions/makeStringLowerCase'

test('makeStringLowerCase', () => {
	const randomString = 'FEfjseIEfjSFJjfieSIESJF'
	expect(makeStringLowerCase(randomString)).toBe(randomString.toLowerCase())
})