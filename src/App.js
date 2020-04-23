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
import './Styles/tic-tac-toe.scss';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from './Layouts/Layout';
import Main from './Pages/Main';
import Football from './Pages/Football';
import Users from './Pages/Users';
import User from './Pages/User';
import Contacts from './Pages/Contacts';
import Gallery from './Pages/Gallery';
import Posts from './Pages/Posts';
import PageNotFound from './Pages/PageNotFound';

const app = document.getElementById('root');


ReactDOM.render(
	<Router>
		<Layout>
			<Switch>
				<Route exact path='/' component={Main} />
				<Route path="/football" component={Football}/>
				<Route
					path="/users"
					render={({ match: { url } }) => (
					<>
						<Route exact path={`${url}/`} component={Users}/>
						<Route path={`${url}/:userId`} component={User}/>
					</>
					)}
				/>
				<Route path="/contacts" component={Contacts}/>
				<Route path="/posts" component={Posts}/>
				<Route path="/gallery" component={Gallery}/>
				<Route path="*" component={PageNotFound}/>
			</Switch>
		</Layout>
	</Router>,
	app);