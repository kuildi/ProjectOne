import React from 'react';

export default function Card (props) {
    return (
        <aside className={"card hoverable bg-alert " + props.class}>
            <header className="card__header">
                <h3>{props.header}</h3>
            </header>
            <div className="card__content">
                {props.children}
            </div>
        </aside>
    );
}

Card.defaultProps = {
    header: 'Card header',
}