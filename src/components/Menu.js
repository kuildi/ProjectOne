import React from 'react';
import MenuItem from './MenuItem';

export default class Menu extends React.Component {

	render() {

		let items = this.props.items.map((item, index) => {
			return <MenuItem key={index} href={item.href} id={item.id} icon={item.icon}>{item.title}</MenuItem>
		});

		return (
			<>
				<ul>
					{items}
				</ul>
			</>
		);
	}
}