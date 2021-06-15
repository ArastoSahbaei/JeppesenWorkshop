import { ReducerButton } from '../components/ReducerButton'

export const LandingView = () => {
	return (
		<div>
			<ReducerButton currentNumber={1337} />
			<ReducerButton />
		</div>
	)
}
