import React, { useState, createContext } from 'react'

export const UserContext = createContext(null)

export const UserProvider = (props) => {
	const [authenticatedUser, setAuthenticatedUser] = useState()
	const { children } = props

	return (
		<UserContext.Provider value={[authenticatedUser, setAuthenticatedUser]}>
			{children}
		</UserContext.Provider>
	)
}