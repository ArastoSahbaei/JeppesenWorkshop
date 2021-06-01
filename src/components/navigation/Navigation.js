import { useState } from 'react'
import { HamburgerButton } from './hamburgerbutton/HamburgerButton'
import { SideBar } from './sidebar/SideBar'
import styled from 'styled-components'
import { BackDrop } from '../BackDrop'
import { useLocation } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

export const Navigation = () => {
	const location = useLocation()
	const [openDrawer, setOpenDrawer] = useState(false)

	const displayViewTitle = () => {
		switch (location.pathname) {
			case RoutingPath.dashboardView:
				return 'Dashboard'
			case RoutingPath.fileManagementView:
				return 'File Management'
			case RoutingPath.landingView:
				return 'Home'
			case RoutingPath.hooksView:
				return 'Hooks'
			case RoutingPath.RESTView:
				return 'API'
			case RoutingPath.propsView:
				return 'Props'
		}
	}

	return (
		<Wrapper>
			<HamburgerButton drawerHandler={setOpenDrawer} />
			<Paragraph>{displayViewTitle()}</Paragraph>
			<SideBar drawerIsOpen={openDrawer} drawerHandler={setOpenDrawer} />
			{!openDrawer || <BackDrop drawerHandler={setOpenDrawer} />}
		</Wrapper>
	)
}

const Wrapper = styled.nav`
	display: grid;
	grid-template-columns: repeat(20, 1fr);
	background-color: #263746;
	padding: 1%;
`
const Paragraph = styled.p`
	font-weight: 600;
	font-size: 1.4rem;
	cursor: pointer;
	transition: 0.3s;
	color: white;
`