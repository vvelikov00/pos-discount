import axios from "axios";

export const merchantRegister = async(user) => {
	try {
		const response = await axios.post(`${process.env.REACT_APP_BACKEND}/registerMerchant`, {
			username: user.username,
			email: user.email,
			password: user.password,
		})
		return response
	} catch(error) {
		return error.response
	}
}