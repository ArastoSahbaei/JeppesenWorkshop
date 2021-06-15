import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

export const SignInView = () => {
	const history = useHistory()
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const signIn = (event) => {
		event.preventDefault()
		history.push(RoutingPath.landingView)
		localStorage.setItem('user', authenticatedUser)
	}

	return (
		<div>
			<form>
				<input placeholder='enter username' onChange={event => setAuthenticatedUser(event.target.value)} />
				<button onClick={(event) => signIn(event)}>sign in</button>
			</form>
		</div>
	)
}
