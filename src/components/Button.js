import React from 'react';

export default function Button(props) {
    return (
        <button className="btn" onClick={props.onClick}>
            {props.children}
            <div className={`btn__icon btn__icon_${props.icon}`}></div>
        </button>
    );
}

Button.defaultProps = {
    class: '',
    onClick: null,
    children: 'Button text'
}