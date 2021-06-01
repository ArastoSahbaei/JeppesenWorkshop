import { useState } from 'react'
import { HamburgerButton } from './hamburgerbutton/HamburgerButton'
import { SideBar } from './sidebar/SideBar'
import styled from 'styled-components'
import { BackDrop } from '../BackDrop'

export const Navigation = () => {
	const [openDrawer, setOpenDrawer] = useState(false)

	return (
		<Wrapper>
			<HamburgerButton drawerHandler={setOpenDrawer} />
			<Span>DASHBOARD</Span>
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

const Span = styled.span`
	color: white;
`
