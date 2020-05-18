import { ADD_USER, GET_USERS } from '../constants/userConstants'
import axios from 'axios'

export function addUser(userId, name, userName, email, phone) {
    return {
        type: ADD_USER,
        payload: { userId, name, userName, email, phone }
    }
}

export function getUsers(params) {
    return {
        type: GET_USERS,
        payload: axios.get('https://jsonplaceholder.typicode.com/users')
    };
}