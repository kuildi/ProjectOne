import * as ConstantUsers from '../constants/userConstants';

export function usersReducer(state = {users: [], is_loading: false}, action) {
	switch(action.type) {
		case ConstantUsers.GET_USERS_PENDING: {
			state = {...state, is_loading:true};
			break;
		}
		case ConstantUsers.GET_USERS_FULFILLED: {
			state = {...state, is_loading: false, users: action.payload.data};
			break;
		}
		case ConstantUsers.GET_USERS_REJECTED: {
			state = {...state, is_loading: false, error_message: action.payload.message};
			break;
		}
	}
	return state;
}