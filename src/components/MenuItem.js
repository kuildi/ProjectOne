import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuItem = (props) => (
	<li className='link-highlight' id={props.id}>
		<NavLink to={props.href}>
			{props.children}
		</NavLink>
	</li>
)

export default MenuItem
