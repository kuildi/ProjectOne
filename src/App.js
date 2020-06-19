import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store'

import './Styles/reset.scss';
import './Styles/style.scss';
import './Styles/grids.scss';


import Layout from './Layouts/Layout';

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