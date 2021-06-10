import { addElementToArray } from '../../functions/addElementToArray'

test('addElementToArray', () => {
	expect(addElementToArray([], 37)).toStrictEqual([37])
	expect(addElementToArray([37], 37)).toStrictEqual([37, 37])
})