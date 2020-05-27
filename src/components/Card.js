import React from 'react';

export default class Card extends React.Component {
    render() {
        return (
            <aside className={"card hoverable bg-alert " + this.props.class}>
                <header className="card__header">
                    <h3>{this.props.header}</h3>
                </header>
                <div className="card__content">
                    {this.props.children}
                </div>
            </aside>
        );
    }
}

Card.defaultProps = {
 header: 'Card header',
}