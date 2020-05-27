import React from 'react'
import { connect } from 'react-redux'
import { addUser, getUsers } from '../actions/userActions'
import Button from '../components/Button'
import UsersList from '../components/UsersList'
import { Orbitals } from 'react-spinners-css'
import $ from 'jquery'

class Users extends React.Component {

    componentDidMount() {
        this.props.dispatch(getUsers());

        $('body').on('submit', (event) => {
            event.preventDefault();

            const userId = $('#idUser');
            const name = $('#name');
            const userName = $('#userName');
            const userEmail = $('#userEmail');
            const userPhone = $('#userPhone');

            const users = addUser(userId.val(), name.val(), userName.val(), userEmail.val(), userPhone.val());
            this.props.dispatch(users);

            userId.val('');
            name.val('');
            userName.val('');
            userEmail.val('');
            userPhone.val('');
        })
    }

    componentWillUnmount() {
        $('body').off('submit')
    }

    render() {
        
        if (this.props.is_loading) {
            return <Orbitals color="#6FCF97"/>
        }

        return (
            <>
            {/* <form action="#">
                <ul>
                    <li><input id="idUser" type="number" placeholder="User id" /></li>
                    <li><input id="name" type="text" placeholder="User's name" /></li>
                    <li><input id="userName" type="text" placeholder="UserName" /></li>
                    <li><input id="userEmail" type="email" placeholder="Email" /></li>
                    <li><input id="userPhone" type="number" placeholder="Phone" /></li>
                </ul>
                <Button class="btn_primary">Добавить пользователя</Button>
            </form> */}

                <UsersList users={this.props.users} />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        is_loading: state.users.is_loading
    }
}

export default connect(mapStateToProps)(Users); 