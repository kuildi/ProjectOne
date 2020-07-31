import React from 'react'
import Loader from './Loader'
import User from './User'

const UsersList = (props) => {

    if (!props.users.length) {
        return <Loader />
    }

    let users = props.users.map((user, index) => {
        return <User key={index} {...user} />
    })

    return (
        <section className="grid-container">
            {users}
        </section>
    );
}

export default UsersList