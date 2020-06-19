import React from 'react';
import Icon from './Icon'

import '../Styles/buttons.scss';

export default function Button(props) {
    return (
        <button className="btn" onClick={props.onClick}>
            {props.children}
            <Icon class="btn__icon" name={props.icon} />
        </button>
    );
}

Button.defaultProps = {
    class: '',
    onClick: null,
    children: 'Button text'
}