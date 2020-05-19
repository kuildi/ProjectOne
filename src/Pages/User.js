import React from 'react';
import axios from 'axios';

import { Orbitals } from 'react-spinners-css'
import UserProfile from '../components/UserProfile'

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.userId}`).
            then((response) => {
                this.setState({ user: response.data });
            })
    }

    render() {
        if (!this.state.user) {
            return <Orbitals color="#be97e8" />
        }

        return (
            <article>
                {<UserProfile {...this.state.user} />}
            </article>
        );
    }
}