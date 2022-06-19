import { SET_USER } from "../actions";

const initialState = {
	user: {},
	isLoading: true
};

export default function userReducer(state = initialState, action) {
	switch(action.type) {
		case SET_USER: 
			return {
				user: action.payload,
				isLoading: false
			}
		default:
			return state
	}
}