import { useState } from 'react'
import { HamburgerButton } from './hamburgerbutton/HamburgerButton'
import { SideBar } from './sidebar/SideBar'

export const Navigation = () => {
	const [openDrawer, setOpenDrawer] = useState(true)

	return (
		<div>
			<HamburgerButton drawerHandler={setOpenDrawer} />
			<SideBar drawerIsOpen={openDrawer} drawerHandler={setOpenDrawer} />
		</div>
	)
}
