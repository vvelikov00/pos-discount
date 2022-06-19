import axios from 'axios';

export const getAllMerchants = async() => {
  try {
		const response = await axios.get(`${process.env.REACT_APP_BACKEND}/merchants/getAllMerchants`)
		return response
	} catch (error) {
    return error.response
  }  
}