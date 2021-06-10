import { render, fireEvent } from '@testing-library/react'
import { Button } from '../../components/Button'

test('checkButtonRender', () => {
	const { queryByTitle } = render(<Button />)
	const button = queryByTitle('randomButton')
	expect(button).toBeTruthy()
})

test('when clicking the button', () => {
	const { queryByTitle } = render(<Button />)
	const button = queryByTitle('randomButton')
	expect(button.innerHTML).toBe('randomValue')
	fireEvent.click(button)
	expect(button.innerHTML).toBe('You clicked the button mate')
})