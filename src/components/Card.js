import React from 'react';
import Button from './Button';

export default class Card extends React.Component {
    render() {
        return (
            <aside className={"card hoverable bg-alert " + this.props.class}>
                <header className="card__header">
                    <h3>{this.props.header}</h3>
                </header>
                <div className="card__content text-overflow_fade">
                    <p>{this.props.text}</p>
                </div>
                <footer className="card__footer">
                    <Button textBtn="See more" class="btn_primary-color" />
                </footer>
            </aside>
        );
    }
}

Card.defaultProps = {
 header: 'Header text',
 text: 'Default textDefault text Default text Default text Default textDefault text'       
}