import { SET_DISCOUNTS} from "../actions";

const initialState = {
	discounts: [],
	isLoading: true
};

export default function discountsReducer(state = initialState, action) {
	switch(action.type) {
		case SET_DISCOUNTS: 
		console.log(action.payload)
			return {
				discounts: action.payload,
				isLoading: false
			}
		default:
			return state
	}
}