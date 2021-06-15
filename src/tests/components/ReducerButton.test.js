import { render, fireEvent } from '@testing-library/react'
import { ReducerButton } from '../../components/ReducerButton'

test('Attempting component rendering', () => {
	render(<ReducerButton />)
})

test('testing the props', () => {
	const currentNumber = 100
	const { getByText } = render(<ReducerButton currentNumber={currentNumber} />)
	/* getByText(/The current value: 0/) */
	/* getByText(new RegExp(`The current value: ${currentNumber}`)) */
	getByText(`The current value: ${currentNumber}`)
})

test('verifying fallback props', () => {
	const { getByText } = render(<ReducerButton />)
	getByText(/The current value: 0/)
})

test('increment button functionality', () => {
	const { getByText } = render(<ReducerButton />)
	const incrementButton = getByText(/increment/)
	fireEvent.click(incrementButton)
	expect(getByText(/The current value: 1/))
})

test('decrement button functionality', () => {
	const { getByText } = render(<ReducerButton />)
	const decrementButton = getByText(/decrement/)
	fireEvent.click(decrementButton)
	// ^ = beginningOfText $ = end of text i=caseSensitivity
	expect(getByText(/^The current value: -1$/i))
})

test('decrement button functionality', () => {
	const { getByText } = render(<ReducerButton />)
	const decrementButton = getByText(/decrement/)

	let i
	for (i = 0; i < 1000; i++) { fireEvent.click(decrementButton) }
	expect(getByText(/^The current value: -1000$/i))
})