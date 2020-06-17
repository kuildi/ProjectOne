import React from 'react'
import Card from './Card'
import Icon from './Icon'


export default function User(props) {
    return (
        <Card header={props.name} >
            <section>
                <Icon class='card__icon' name='profile' />
                {props.username}
            </section>
            <section>
                <Icon class='card__icon' name='mail_gradient' />
                {props.email}
            </section>
            <section>
                <Icon class='card__icon' name='phone' />
                {props.phone}
            </section>
            <section>
                <Icon class='card__icon' name='web' />
                {props.website}
            </section>
        </Card>
    );
}