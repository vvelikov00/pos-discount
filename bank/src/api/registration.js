import axios from "axios";

export const Registration = async(user) => {
	try {
		const response = await axios.post(`${process.env.REACT_APP_BACKEND}/bank/register`, {
			username: user.username,
			password: user.password,
			email: user.email
		})
		return response
	} catch(error) {
		return error.response
	}
}