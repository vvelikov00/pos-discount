import axios from 'axios';

export const addNewDiscount = async(discount) => {
  try {
		const response = await axios.post(`${process.env.REACT_APP_BACKEND}/discounts/addDiscount`, {
			merchantid: discount.merchantId,
			start: discount.start,
			end: discount.end,
			discount: discount.discount
		})
		return response
	} catch(error) {
		return error.response
	}  
}