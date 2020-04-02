import React from 'react';
import Button from './Button';

export default class Card extends React.Component {
    render() {
        return (
            <aside className={"card hoverable " + this.props.class}>
                {/* <section className="card__cover"></section> */}
                <header className="card__header">
                    <h5>{this.props.header}</h5>
                </header>
                <div className="card__content white-text">
                    <p>{this.props.text}</p>
                </div>
                <footer className="card__footer">
                    <Button textBtn="See more" class="btn_primary-color" />
                </footer>
            </aside>
        );
    }
}