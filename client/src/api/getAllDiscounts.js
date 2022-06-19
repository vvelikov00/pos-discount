import axios from 'axios';

export const getAllDiscounts = async() => {
  try {
		const response = await axios.get(`${process.env.REACT_APP_BACKEND}/discounts/getAllDiscounts`)
		return response
	} catch (error) {
    return error.response
  }  
}