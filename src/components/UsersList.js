import React from 'react'
import Loader from '../components/Loader'
import User from './User'

export default class UsersList extends React.Component {

    render() {
        if (!this.props.users.length) {
            return <Loader />
        }

        let users = this.props.users.map((user, index) => {
            return <User key={index} {...user} />
        })

        return (
            <section className="grid-container">
                {users}
            </section>
        );
    }
}