import React from 'react'


export default class UserProfile extends React.Component {
    render() {
        
        return (
            <article>
                <p>{this.props.username}</p>
                <p>{this.props.email}</p>
                <p>{this.props.phone}</p>
                <p>{this.props.website}</p>
            </article>
        );
    }
}