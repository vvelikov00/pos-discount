import axios from "axios";

export const merchnatsLogin = async(user) => {
	try {
		const response = await axios.post(`${process.env.REACT_APP_BACKEND}/merchants/login`, {
			username: user.username,
			password: user.password,
		})
		return response
	} catch(error) {
		return error.response
	}
}