import React from 'react'
import Card from './Card'


export default function User(props) {
    return (
        <Card header={props.name} >
            <section>
                <div className="icon"></div>{props.username}
            </section>
            <section>
                <div className="icon"></div>{props.email}
            </section>
            <section>
                <div className="icon"></div>{props.phone}
            </section>
            <section>
                <div className="icon"></div>{props.website}
            </section>
        </Card>
    );
}