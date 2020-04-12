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

// import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import { HashRouter as Router, Route } from "react-router-dom";
import Layout from './Layouts/Layout';
import Main from './Pages/Main';
import Football from './Pages/Football';
import Basketball from './Pages/Basketball';
import Cricket from './Pages/Cricket';
import Contacts from './Pages/Contacts';
import Tennis from './Pages/Tennis';
import Gallery from './Pages/Gallery';

const app = document.getElementById('root');


ReactDOM.render(
	<Router>
		<Layout>
			<Route exact path='/' component={Main} />
			<Route path="/football" component={Football}></Route>
			{/* <Route path="/basketball" component={Basketball}></Route>
			<Route path="/cricket" component={Cricket}></Route>
			<Route path="/tennis" component={Tennis}></Route> */}
			<Route path="/contacts" component={Contacts}></Route>
			<Route path="/gallery" component={Gallery}></Route>
		</Layout>
	</Router>,
	app);