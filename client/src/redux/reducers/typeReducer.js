import { SET_TYPE } from "../actions";

const initialState = {
	type: 'Cardholder',
	isLoading: true
};

export default function typeReducer(state = initialState, action) {
	switch(action.type) {
		case SET_TYPE: 
			return {
				type: action.payload.type,
				isLoading: false
			}
		default:
			return state
	}
}