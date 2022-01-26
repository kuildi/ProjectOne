import React from 'react'
import Icon from './Icon'

const Button = (props) => (
    <button className="button" onClick={props.onClick}>
        {props.children}
        <Icon class="button__icon" name={props.icon} />
    </button>
)

export default Button