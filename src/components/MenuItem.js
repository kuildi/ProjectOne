import React from 'react';
import {NavLink} from 'react-router-dom';

export default class MenuItem extends React.Component {
	render() {
		return (
			<li className='link-highlight' id={this.props.id}>
				<NavLink to={this.props.href}>
					{this.props.children}
				</NavLink>
			</li>
		);
	}
}
