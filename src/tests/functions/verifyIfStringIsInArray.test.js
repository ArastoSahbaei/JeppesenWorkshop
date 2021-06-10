import { verifyIfStringIsInArray } from '../../functions/verifyIfStringIsInArray'

test('verifyIfStringIsInArray', () => {
	const array = ['arasto', 'pedro', 'julius', 'amigo', 'gonzales']
	const searchTerm = 'arasto'

	expect(verifyIfStringIsInArray(array, searchTerm)).toBe(true)
})