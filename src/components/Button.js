import React from 'react';

export default function Button(props) {
    return (
        <button className={"btn " + props.class} onClick={props.onClick}>
            {props.textBtn}
        </button>
    );
}

Button.defaultProps = {
    class: '',
    onClick: '',
    textBtn: 'Button text'
}