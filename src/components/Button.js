import { useState } from 'react'

export const Button = () => {
	const [value, setValue] = useState('randomValue')

	const updateState = () => {
		setValue('You clicked the button mate')
	}

	return (
		<button title='randomButton' onClick={updateState}>
			{value}
		</button>
	)
}
