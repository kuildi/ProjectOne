import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/reset.scss';
import './Styles/style.scss';
import './Styles/header.scss';
import './Styles/footer.scss';
import './Styles/grids.scss';
import './Styles/inputs.scss';
import './Styles/buttons.scss';
import './Styles/cards.scss';
import './Styles/tiles.scss';
import './Styles/tic-tac-toe.scss';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from './Layouts/Layout';
import Main from './Pages/Main';
import Skills from './Pages/Skills';
import Users from './Pages/Users';
import User from './Pages/User';
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import Posts from './Pages/Posts';
import PageNotFound from './Pages/PageNotFound';

import { Provider } from 'react-redux';
import store from './store'

const app = document.getElementById('root');


ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Layout>
				<Switch>
					<Route exact path='/' component={Main} />
					<Route path="/skills" component={Skills} />
					<Route
						path="/users"
						render={({ match: { url } }) => (
							<>
								<Route exact path={`${url}/`} component={Users} />
								<Route path={`${url}/:userId`} component={User} />
							</>
						)}
					/>
					<Route path="/posts" component={Posts} />
					<Route path="/about" component={About} />
					<Route path="*" component={PageNotFound} />
				</Switch>
			</Layout>
		</Router>
	</Provider>,
	app);