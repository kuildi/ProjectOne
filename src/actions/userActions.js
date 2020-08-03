import { GET_USERS } from '../constants/userConstants'
import axios from 'axios'

export function getUsers(params) {
    return {
        type: GET_USERS,
        payload: axios.get('https://jsonplaceholder.typicode.com/users')
    };
}