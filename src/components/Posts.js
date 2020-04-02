import React from 'react';
import Card from './Card';

export default class Posts extends React.Component {

    render() {

        let items = this.props.items.map((item, index) => {
            return <Card key={index} class={''} header={item.header} text={item.text}></Card>
        });

        return (
            <section className="grid-container">
                {items} 
            </section>
        );
    }
}