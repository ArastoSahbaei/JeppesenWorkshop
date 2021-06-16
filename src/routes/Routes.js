import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { LandingView } from '../view/LandingView'
import { HooksView } from '../view/HooksView'
import { PropsView } from '../view/PropsView'
import { DashboardView } from '../view/dashboardview/DashboardView'
import { RESTView } from '../view/RESTView'
import { FileManagementView } from '../view/filemanagementview/FileManagementView'
import RoutingPath from './RoutingPath'
import PropTypes from 'prop-types'
import { SignInView } from '../view/signinview/SignInView'
import { useContext, useEffect } from 'react'
import { UserContext } from '../shared/provider/UserProvider'
import { DetailedFileView } from '../view/detailedfileview/DetailedFileView'


export const Routes = (props) => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const blockRouteIfAuthenticated = (navigateToViewIfAuthenticated) => {
		return authenticatedUser?.username ? LandingView : navigateToViewIfAuthenticated
	}

	useEffect(() => {
		setAuthenticatedUser({
			username: localStorage.getItem('user'),
			admin: localStorage.getItem('admin')
		})
	}, [])

	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				<Route exact path={RoutingPath.hooksView} component={HooksView} />
				<Route exact path={RoutingPath.propsView} component={PropsView} />
				<Route exact path={RoutingPath.RESTView} component={RESTView} />
				<Route exact path={RoutingPath.dashboardView} component={DashboardView} />
				<Route exact path={RoutingPath.fileManagementView} component={FileManagementView} />
				<Route exact path={RoutingPath.fileDetailViewe} component={DetailedFileView} />
				<Route exact path={RoutingPath.signInView} component={blockRouteIfAuthenticated(SignInView)} />
				<Route component={LandingView} />
			</Switch>
		</BrowserRouter>
	)
}

Routes.propTypes = {
	children: PropTypes.any,
}
