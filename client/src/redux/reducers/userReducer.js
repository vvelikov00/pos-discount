import { SET_USER, UPDATE_SUBSCRIPTION } from "../actions";

const initialState = {
	user: {},
	isLoading: true
};

export default function userReducer(state = initialState, action) {
	switch(action.type) {
		case SET_USER: 
		console.log(action.payload)
			return {
				user: action.payload,
				isLoading: false
			}
		case UPDATE_SUBSCRIPTION:
			return {
				user: {...state.user, subscription: action.payload},
				isLoading: false
			}	
		default:
			return state
	}
}