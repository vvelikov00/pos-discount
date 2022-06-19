import axios from 'axios';

export const getMyDiscounts = async(id) => {
  try {
		const response = await axios.get(`${process.env.REACT_APP_BACKEND}/discounts/getMyDiscounts/${id}`)
		return response
	} catch (error) {
    return error.response
  }  
}