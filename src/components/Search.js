import { useState } from 'react'

export const Search = () => {
	const [input, setInput] = useState()

	const handleChange = (event) => {
		setInput(event.target.value)
	}

	return (
		<input title='searchInputField' onChange={event => handleChange(event)} />
	)
}
