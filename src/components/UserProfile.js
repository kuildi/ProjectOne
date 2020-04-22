import React from 'react'
import Card from './Card'


export default class UserProfile extends React.Component {
    render() {

        return (
            <article>
                <Card header={this.props.username} text=''>
                    <p>{this.props.username}</p>
                    <p>{this.props.email}</p>
                    <p>{this.props.phone}</p>
                    <p>{this.props.website}</p>
                </Card>
            </article>
        );
    }
}