import React from 'react'
import MenuItem from './MenuItem'

const Menu = (props) => {

	let items = props.items.map((item, index) => {
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

export default Menu