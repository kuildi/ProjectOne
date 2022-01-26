import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import './Styles/main.scss';

import Layout from './Layouts/Layout';

import AnimatedSwitch from './components/AnimatedSwitch';


const app = document.getElementById('root');

ReactDOM.render(
	<Router>
		<Layout>
			<AnimatedSwitch />
		</Layout>
	</Router>,
	app);