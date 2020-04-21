import React from 'react'
import {NavLink} from 'react-router-dom';
import Card from './Card'


export default class User extends React.Component {
    render() {
        
        return (
            <NavLink to={`/users/${this.props.id}`}>
                <Card header={this.props.username} text={this.props.name}>
                    <p>{this.props.email}</p>
                    <p>{this.props.phone}</p>
                    <p>{this.props.website}</p>
                </Card>
            </NavLink>
        );
    }
}