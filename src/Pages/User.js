import React from 'react';
import axios from 'axios';
import UserProfile from '../components/UserProfile'

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
        console.log(this.props.match.params.userId);
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.userId}`).
        then((response) => {
            this.setState({user: response.data});
        })
    }

    render() {

        return (
            <article className="">
                {this.state.user && <UserProfile {...this.state.user} />}
            </article>
        );
    }
}