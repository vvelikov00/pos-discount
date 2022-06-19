export const SET_USER = 'SET_USER';
export const UPDATE_SUBSCRIPTION = 'UPDATE_SUBSCRIPTION';
export const SET_TYPE = 'SET_TYPE';
export const SET_DISCOUNTS = 'SET_DISCOUNTS';

export const setUser = user => dispatch => {
  dispatch({
		type: SET_USER,
		payload: user
  })  
};

export const updateSubscription = sub => dispatch => {
	dispatch({
		type: UPDATE_SUBSCRIPTION,
		payload: sub
	})
};

export const setType = type => dispatch => {
  dispatch({
		type: SET_TYPE,
		payload: type
  })  
};

export const setDiscounts = discounts => dispatch => {
  dispatch({
		type: SET_DISCOUNTS,
		payload: discounts
  })  
};