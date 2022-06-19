import axios from "axios";

export const merchnatsContinue = async(user) => {
	try {
		const response = await axios.post(`${process.env.REACT_APP_BACKEND}/merchants/continue`, {
			username: user.username,
			password: user.password,
			phone: user.phone
		})
		return response
	} catch(error) {
		return error.response
	}
}