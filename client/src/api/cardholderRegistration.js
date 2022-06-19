import axios from "axios";

export const cardholderRegistration = async(user) => {
	try {
		const response = await axios.post(`${process.env.REACT_APP_BACKEND}/cardholders/register`, {
			username: user.username,
			password: user.password,
			email: user.email,
			cardNumber: user.cardNumber,
			phone: user.phone
		})
		return response
	} catch(error) {
		return error.response
	}
}