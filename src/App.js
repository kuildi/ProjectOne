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

import { HashRouter as Router, Route, Switch, browserHistory } from "react-router-dom";
import Layout from './Layouts/Layout';
import Main from './Pages/Main';
import Football from './Pages/Football';
import Contacts from './Pages/Contacts';
import Gallery from './Pages/Gallery';
import PageNotFound from './Pages/PageNotFound';

const app = document.getElementById('root');


ReactDOM.render(
	<Router history={browserHistory}>
		<Layout>
			<Switch>
				<Route exact path='/' component={Main} />
				<Route path="/football" component={Football}></Route>
				<Route path="/contacts" component={Contacts}></Route>
				<Route path="/gallery" component={Gallery}></Route>
				<Route path="*" component={PageNotFound}></Route>
			</Switch>
		</Layout>
	</Router>,
	app);