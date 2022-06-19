import axios from "axios";

export const bankLogin = async(user) => {
	try {
		const response = await axios.post(`${process.env.REACT_APP_BACKEND}/bank/login`, {
			username: user.username,
			password: user.password,
		})
		return response
	} catch(error) {
		return error.response
	}
}