import { render, fireEvent, cleanup } from '@testing-library/react'
import { SearchFiles } from '../../view/filemanagementview/searchfiles/SearchFiles'

let getByTestId
beforeEach(() => {
	const component = render(<SearchFiles />)
	getByTestId = component.getByTestId
})

//Does this by default
afterEach(() => {
	cleanup()
})

test('Render Component', () => {
	const h1Title = getByTestId('searchFilter')
	expect(h1Title.textContent).toBe('Filter (search) between files')
})

test('can the input change value', () => {
	const input = getByTestId('searchInput')
	expect(input.textContent).toBe('')
	fireEvent.change(input, {
		target: {
			value: 'new input value'
		}
	})
	expect(input.value).toBe('new input value')
})