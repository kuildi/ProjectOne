import dispatcher from '../dispatcher'
import { ADD_USER, GET_USERS } from '../constants/userConstants'
import axios from 'axios'

export function addUser(userId, name, userName, email, phone) {
    dispatcher.dispatch({
        type: ADD_USER,
        data: { userId, name, userName, email, phone }
    })
}

export function getUsers(params) {
    axios.get('https://jsonplaceholder.typicode.com/users').
        then((response) => {
            dispatcher.dispatch({
                type: GET_USERS,
                data: response.data
            })
        })
}