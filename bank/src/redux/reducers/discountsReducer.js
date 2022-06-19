import { SET_DISCOUNTS, UPDATE_DISCOUNTS} from "../actions";

const initialState = {
	discounts: [],
	isLoading: true
};

export default function discountsReducer(state = initialState, action) {
	switch(action.type) {
		case SET_DISCOUNTS: 
			return {
				discounts: action.payload,
				isLoading: false
			}
		case UPDATE_DISCOUNTS: 
			return {
				discounts: state.discounts.map(discount => {
					if(discount.id === action.payload.id) {
						return action.payload
					} else return discount
				}),
				isLoading: false
			}	
		default:
			return state
	}
}