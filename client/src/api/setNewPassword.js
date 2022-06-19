import axios from "axios";

export const setNewPassword = async(user) => {
	try {
		const response = await axios.post(`${process.env.REACT_APP_BACKEND}/forgottenPassword/reset`, {
			token: user.token,
            password: user.password
		})
		return response
	} catch(error) {
		return error.response
	}
}