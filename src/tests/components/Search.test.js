import { render, fireEvent } from '@testing-library/react'
import { Search } from '../../components/Search'

test('Rendering Component', () => {
	const { queryByTitle } = render(<Search />)
	const input = queryByTitle('searchInputField')
	expect(input).toBeTruthy()
})

test('updating input value', () => {
	const { queryByTitle } = render(<Search />)
	const input = queryByTitle('searchInputField')
	expect(input.value).toBeFalsy()
	fireEvent.change(input, { target: { value: 'roflmao' } })
	expect(input.value).toBe('roflmao')
})