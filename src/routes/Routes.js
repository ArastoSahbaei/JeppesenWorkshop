import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { LandingView } from '../view/LandingView'
import { HooksView } from '../view/HooksView'
import { PropsView } from '../view/PropsView'
import { DashboardView } from '../view/DashboardView'
import { RESTView } from '../view/RESTView'
import { FileManagementView } from '../view/FileManagementView'
import RoutingPath from './RoutingPath'
import PropTypes from 'prop-types'

export const Routes = (props) => {
	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				<Route exact path={RoutingPath.hooksView} component={HooksView} />
				<Route exact path={RoutingPath.propsView} component={PropsView} />
				<Route exact path={RoutingPath.RESTView} component={RESTView} />
				<Route exact path={RoutingPath.dashboardView} component={DashboardView} />
				<Route exact path={RoutingPath.fileManagementView} component={FileManagementView} />
				<Route component={LandingView} />
			</Switch>
		</BrowserRouter>
	)
}

Routes.propTypes = {
	children: PropTypes.component,
}
