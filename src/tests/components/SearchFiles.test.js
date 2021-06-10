import { render, fireEvent } from '@testing-library/react'
import { SearchFiles } from '../../view/filemanagementview/searchfiles/SearchFiles'

test('Render Component', () => {
	const { getByTestId } = render(<SearchFiles />)
	const h1Title = getByTestId('searchFilter')
	expect(h1Title.textContent).toBe('Filter (search) between files')
})


/*
const component = render(<SearchFiles />)
const h1Title = component.getByTestId('searchFilter')
 */