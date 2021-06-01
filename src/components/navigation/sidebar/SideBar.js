import PropTypes from 'prop-types'
import styled from 'styled-components'

export const SideBar = (props) => {
	const { drawerIsOpen, drawerHandler } = props

	return (
		<Drawer isOpen={drawerIsOpen}>
			<h1 onClick={() => drawerHandler(false)}>Exit</h1>
			<ul>
				<li>
					<a href="/">Products</a>
				</li>
				<li>
					<a href="/">Users</a>
				</li>
			</ul>
		</Drawer>
	)
}

SideBar.propTypes = {
	drawerIsOpen: PropTypes.boolean,
	drawerHandler: PropTypes.function
}

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