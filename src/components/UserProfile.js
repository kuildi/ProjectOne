import React from 'react'
import Card from './Card'


export default class UserProfile extends React.Component {
    render() {

        return (
            <article className="grid-main">
                <section className="grid__item_width_half grid__item_distribute_center">
                    <Card header={this.props.username} text=''>
                        <p>{this.props.email}</p>
                        <p>{this.props.phone}</p>
                        <p>{this.props.website}</p>
                    </Card>
                </section>
            </article>
        );
    }
}