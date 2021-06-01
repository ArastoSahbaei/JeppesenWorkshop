import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { LandingView } from '../view/LandingView'
import { HooksView } from '../view/HooksView'

export const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={'/rr'} component={HooksView} />
				<Route component={LandingView} />
			</Switch>
		</BrowserRouter>
	)
}
