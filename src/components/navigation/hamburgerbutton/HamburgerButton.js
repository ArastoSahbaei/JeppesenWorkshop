import styled from 'styled-components'
import PropTypes from 'prop-types'

export const HamburgerButton = (props) => {
	return (
		<ToggleButton className="toggle-button" onClick={() => props.drawerHandler(true)}>
			<ToggleButtonLine className="toggle-button__line" />
			<ToggleButtonLine className="toggle-button__line" />
			<ToggleButtonLine className="toggle-button__line" />
		</ToggleButton>
	)
}

HamburgerButton.propTypes = {
	drawerHandler: PropTypes.function
}

const ToggleButton = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 24px;
	width: 30px;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	box-sizing: border-box;
	&:focus {
		outline: none;
	  }
`

const ToggleButtonLine = styled.div`
	width: 30px;
	height: 2px;
	background: #202020;
	&:hover {color: display: none;}
`