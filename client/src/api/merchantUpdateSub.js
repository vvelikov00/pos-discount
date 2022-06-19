import axios from 'axios';

export const updateSub = async (id) => {
	try {
		await axios.post(`${process.env.REACT_APP_BACKEND}/merchants/updateSubscription`, {
			id
		})
	} catch (error) {
		console.log(error.response)
	}
}