import dispatcher from '../dispatcher'
import { ADD_POST, GET_POSTS } from '../constants/postConstants'
import axios from 'axios'

export function addPost(title, body, userId) {
    dispatcher.dispatch({
        type: ADD_POST,
        data: { title, body, userId }
    })
}

export function getPosts(params) {
    axios.get('https://jsonplaceholder.typicode.com/posts').
        then((response) => {
            dispatcher.dispatch({
                type: GET_POSTS,
                data: response.data
            })
        })
}