import React from 'react'
import Icon from './Icon'

const Button = (props) => (
    <button className="btn" onClick={props.onClick}>
        {props.children}
        <Icon class="btn__icon" name={props.icon} />
    </button>
)

Button.defaultProps = {
    class: '',
    onClick: null,
    children: 'Button text'
}

export default Button