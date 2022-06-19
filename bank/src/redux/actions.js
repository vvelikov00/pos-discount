export const SET_USER = 'SET_USER';
export const SET_DISCOUNTS = 'SET_DISCOUNTS';
export const UPDATE_DISCOUNTS = 'UPDATE_DISCOUNTS';
export const SET_MERCHANTS = 'SET_MERCHANTS';

export const setUser = user => dispatch => {
  dispatch({
		type: SET_USER,
		payload: user
  })  
};

export const setDiscounts = discounts => dispatch => {
	dispatch({
		type: SET_DISCOUNTS,
		payload: discounts
	})  
};

export const updateDiscounts = discount => dispatch => {
	dispatch({
		type: UPDATE_DISCOUNTS,
		payload: discount
	})  
};

export const setMerchants = merchants => dispatch => {
	dispatch({
		type: SET_MERCHANTS,
		payload: merchants
	})  
};