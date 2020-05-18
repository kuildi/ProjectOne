import {createStore, combineReducers, applyMiddleware} from 'redux';

import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import {postsReducer} from './reducers/postReducer';
import {usersReducer} from './reducers/userReducer';

const reducers = combineReducers({
	posts: postsReducer,
	users: usersReducer
})

const middleware = applyMiddleware(promise, thunk, logger);

const store = createStore(reducers, middleware);
export default store;