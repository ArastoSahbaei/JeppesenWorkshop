import { useReducer } from 'react'

const reducer = (state, action) => {
	switch (action) {
	case 'increment': return state + 1
	case 'decrement': return state - 1
	default: throw new Error
	}
}

export const ReducerButton = () => {
	const [value, dispatch] = useReducer(reducer, 0)

	return ( 
		<div>
			The current value: {value}
			<button onClick={() => dispatch('increment')}>increment</button>
			<button onClick={() => dispatch('decrement')}>decrement</button>
		</div>
	)
}
