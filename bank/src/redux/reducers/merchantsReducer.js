import { SET_MERCHANTS} from "../actions";

const initialState = {
	merchants: [],
	isLoading: true
};

export default function merchantsReducer(state = initialState, action) {
	switch(action.type) {
		case SET_MERCHANTS: 
			return {
				merchants: action.payload,
				isLoading: false
			}
		default:
			return state
	}
}