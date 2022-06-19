import axios from "axios";

export const createToken = async(user) => {
	try {
		const response = await axios.post(`${process.env.REACT_APP_BACKEND}/forgottenPassword`, {
			email: user.email
		})
		return response
	} catch(error) {
		return error.response
	}
}