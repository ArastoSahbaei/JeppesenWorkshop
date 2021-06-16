import { useContext, useState } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export const SignInView = () => {
	const history = useHistory()
	const [auth, setAuth] = useState('')
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const signIn = (event) => {
		event.preventDefault()
		setAuthenticatedUser(auth)
		localStorage.setItem('user', auth.username)
		localStorage.setItem('admin', auth.admin)
		history.push(RoutingPath.landingView)
	}

	return (
		<div>
			<form>
				<input
					placeholder='enter username'
					onChange={event => setAuth({ username: event.target.value, admin: true })} />
				<button onClick={(event) => signIn(event)}>sign in</button>
			</form>
		</div>
	)
}
