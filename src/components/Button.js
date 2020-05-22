import React from 'react';

export default function Button(props) {
    return (
        <button className="btn" onClick={props.onClick}>
            {props.children}
        </button>
    );
}

Button.defaultProps = {
    class: '',
    onClick: null,
    children: 'Button text'
}