import React from 'react'
import { connect } from 'react-redux'
import { addUser, getUsers } from '../actions/userActions'
import UsersList from '../components/UsersList'
import { Orbitals } from 'react-spinners-css'

class Users extends React.Component {

    componentDidMount() {
        this.props.dispatch(getUsers());
    }

    render() {
        
        if (this.props.is_loading) {
            return <Orbitals color="#6FCF97"/>
        }

        return (
            <>
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