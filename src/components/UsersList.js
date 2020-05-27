import React from 'react'
import { Orbitals } from 'react-spinners-css'
import User from './User'

export default class UsersList extends React.Component {

    render() {
        if (!this.props.users.length) {
            return (
                <Orbitals color="#be97e8" />)
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