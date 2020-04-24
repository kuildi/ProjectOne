import React from 'react'
import UserStore from '../stores/userStore'
import { addUser, getUsers } from '../actions/userActions'
import Button from '../components/Button'
import UsersList from '../components/UsersList'

export default class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            userId: '',
            name: '',
            userName: '',
            email: '',
            phone: ''
        }

        this.onUserChange = this.onUserChange.bind(this);
        this.newUser = this.newUser.bind(this);
        this.handleUserIdChange = this.handleUserIdChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
    }

    handleUserIdChange(event) {
        this.setState({ userId: event.target.value });
    }
    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }
    handleUserNameChange(event) {
        this.setState({ userName: event.target.value });
    }
    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    handlePhoneChange(event) {
        this.setState({ phone: event.target.value });
    }

    onUserChange() {
        this.setState({ users: UserStore.users });
    }

    newUser() {
        addUser(this.state.userId, this.state.name, this.state.userName, this.state.email, this.state.phone)
    }

    componentDidMount() {
        getUsers();
        UserStore.on('change', this.onUserChange);
    }

    componentWillUnmount() {
        UserStore.removeListener('change', this.onUserChange);
    }

    render() {
        return (
            <>
                <Button class="btn_primary" onClick={this.newUser} />
                <ul>
                    <li><input type="number" value={this.state.userId} onChange={this.handleUserIdChange} /></li>
                    <li><input type="text" value={this.state.name} onChange={this.handleNameChange} /></li>
                    <li><input type="text" value={this.state.userName} onChange={this.handleUserNameChange} /></li>
                    <li><input type="email" value={this.state.email} onChange={this.handleEmailChange} /></li>
                    <li><input type="number" value={this.state.phone} onChange={this.handlePhoneChange} /></li>
                </ul>
                
                <UsersList users={this.state.users} />
            </>
        );
    }
}