import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { LandingView } from '../view/LandingView'
import { HooksView } from '../view/HooksView'
import PropTypes from 'prop-types'

export const Routes = (props) => {
	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				<Route exact path={'/rr'} component={HooksView} />
				<Route component={LandingView} />
			</Switch>
		</BrowserRouter>
	)
}

Routes.propTypes = {
	children: PropTypes.component,
}
