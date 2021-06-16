import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'
import logotype from '../../../shared/images/logotype.png'
import { useContext } from 'react'
import { UserContext } from '../../../shared/provider/UserProvider'

export const SideBar = (props) => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
	const { drawerIsOpen, drawerHandler } = props
	const history = useHistory()

	const navigate = (route) => {
		history.push(route)
		drawerHandler(false)
	}

	const signOut = () => {
		setAuthenticatedUser(false)
		localStorage.removeItem('user')
		localStorage.removeItem('admin')
		navigate(RoutingPath.landingView)
	}

	const displaySignOut = () => {
		if (authenticatedUser) {
			return <Paragraph onClick={() => signOut()}>Sign out</Paragraph>
		}
	}

	const displayUsername = () => {
		return authenticatedUser?.username
			? <Paragraph>{authenticatedUser.username}</Paragraph>
			: <Paragraph onClick={() => navigate(RoutingPath.signInView)}>Sign in/Register</Paragraph>
	}

	return (
		<Drawer isOpen={drawerIsOpen}>
			<img onClick={() => drawerHandler(false)} src={logotype} alt={''} style={{ width: 350, margin: 5 }} />
			<hr />
			{displayUsername()}
			<hr />
			<Paragraph onClick={() => navigate(RoutingPath.hooksView)}>Hooks</Paragraph>
			<Paragraph onClick={() => navigate(RoutingPath.propsView)}>Props</Paragraph>
			<Paragraph onClick={() => navigate(RoutingPath.RESTView)}>API</Paragraph>
			<Paragraph onClick={() => navigate(RoutingPath.dashboardView)}>Dashboard</Paragraph>
			<Paragraph onClick={() => navigate(RoutingPath.fileManagementView)}>FileBrowsing & Upload</Paragraph>
			<Paragraph onClick={() => navigate(RoutingPath.dashboardView)}>Testing</Paragraph>
			<Paragraph onClick={() => navigate(RoutingPath.dashboardView)}>Mocking</Paragraph>
			<Paragraph onClick={() => navigate(RoutingPath.dashboardView)}>Mock REST API</Paragraph>
			<hr />
			{displaySignOut()}
		</Drawer>
	)
}

SideBar.propTypes = {
	drawerIsOpen: PropTypes.boolean,
	drawerHandler: PropTypes.func
}

const Paragraph = styled.p`
font-weight: 600;
font-size: 1.4rem;
cursor: pointer;
transition: 0.3s;
&:hover {
	margin-left: 20px;
	transition: 0.3s;
}
`

const Drawer = styled.nav`
	height: 100%;
	background: white;
	box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	width: 70%;
	max-width: 400px;
	z-index: 200;
	transform: translateX(-100%);
	transition: transform 0.3s ease-in-out;
	transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100)'}
`