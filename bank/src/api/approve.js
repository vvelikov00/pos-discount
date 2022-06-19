import axios from "axios";

export const approve = async(discount) => {
	try {
		const response = await axios.post(`${process.env.REACT_APP_BACKEND}/discounts/approve`, {
			id: discount.id,
			userId: discount.userId,
			username: discount.username,
			subscription: discount.subscription,
			email: discount.email
		})
		return response
	} catch(error) {
		return error.response
	}
}