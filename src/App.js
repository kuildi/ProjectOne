import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Provider } from 'react-redux';
import store from './store'

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

import Layout from './Layouts/Layout';
import Main from './Pages/Main';
import Skills from './Pages/Skills';
import Users from './Pages/Users';
import About from './Pages/About';
import PageNotFound from './Pages/PageNotFound';

import AnimatedSwitch from './components/AnimatedSwitch';


const app = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Layout>
				<AnimatedSwitch />
			</Layout>
		</Router>
	</Provider>,
	app);