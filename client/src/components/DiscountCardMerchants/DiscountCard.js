import { Box, Typography } from '@mui/material';

const DiscountCard = ({discount}) => {
	console.log(discount.discount)
	return (
		<Box sx={{width: '50%', background: '#f5f5f5', display: 'flex', marginTop: '2%', alignItems: 'center', justifyContent: 'center', paddingTop: '1%', paddingBottom: '1%', borderRadius: 4}} >
			<Box sx={{width: 40, height: 40, borderRadius: 50, background: '#e3e3e3', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '2%', justifySelf: 'start'}} >
				<Typography variant='h6' >{discount.id}</Typography>
			</Box>
			<Box sx={{display: 'flex', flexDirection: 'column', marginLeft: '2%', alignItems: 'center', width: '70%'}} >
				<Typography sx={{fontWeight: 'bold'}}>{discount.discount} %</Typography>
				<Typography>{discount.start} - {discount.end}</Typography>
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
			<Typography>{discount.status}</Typography>
			</Box>
		</Box>
	)  
}

export {DiscountCard}
