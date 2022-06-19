import { Box, Button, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { approve } from '../../api/approve';
import { updateDiscounts } from '../../redux/actions';


const DiscountCard = ({discount}) => {
	const {user} = useSelector(state => state.user)
	const dispatch = useDispatch()

	const handleApprove = async () => {
		const Discount = {
			id: discount.id,
			userId: user.id,
			username: discount.merchant.username,
			subscription: discount.merchant.subscription,
			email: discount.merchant.email
		}
		const response = await approve(Discount)
		dispatch(updateDiscounts(response.data))
		

	}

	return (
		<Box sx={{width: '50%', background: '#f5f5f5', display: 'flex', marginTop: '2%', alignItems: 'center', justifyContent: 'center', paddingTop: '1%', paddingBottom: '1%', borderRadius: 4}} >
			<Box sx={{width: 50, height: 50, borderRadius: 50, background: '#e3e3e3', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '2%', justifySelf: 'start'}} >
				<Typography variant='h6' >{discount.discount}%</Typography>
			</Box>
			<Box sx={{display: 'flex', flexDirection: 'column', marginLeft: '2%', alignItems: 'center', width: '50%'}} >
				<Typography sx={{fontWeight: 'bold'}}>{discount.merchant.username}</Typography>
				<Typography variant='p' >{discount.start} - {discount.end}</Typography>
			</Box>
			<Box 
				sx={{
					justifySelf: 'end', 
					width: '15%', 
					background: discount.status === 'Active' ? '#039122' : discount.status === 'Rejected' ? "#c94c26" : discount.status === 'Expired' ? '#c94c26' : '#e3e3e3', 
					height: '90%', 
					borderRadius: 3, 
					display: 'flex', 
					justifyContent: 'center', 
					alignItems: 'center',
					color: discount.status === 'Waiting' ? 'black' : 'white'
				}}
			>
			<Typography>{discount.approved}/2</Typography>
			</Box>
			<Button 
				variant='contained' 
				sx={{marginLeft: '3%', height: '90%', borderRadius: 3, textTransform: 'none', marginRight: '2%'}} 
				color='success' 
				disabled={discount.first === user.id || discount.second === user.id}
				onClick={handleApprove}
			>
				Approve
			</Button>
		</Box>
	)  
}

export {DiscountCard}
