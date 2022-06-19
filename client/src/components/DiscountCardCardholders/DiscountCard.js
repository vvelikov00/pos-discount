import { Box, Typography, Avatar } from '@mui/material';
import { stringAvatar } from '../../functions/stringAvatar';

const DiscountCard = ({discount}) => {
	console.log(discount.discount)
	return (
		<Box sx={{width: '50%', background: '#f5f5f5', display: 'flex', marginTop: '2%', alignItems: 'center', justifyContent: 'center', paddingTop: '1%', paddingBottom: '1%', borderRadius: 4}} >
			<Box sx={{width: 40, height: 40, borderRadius: 50, background: '#e3e3e3', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '2%', justifySelf: 'start'}} >
				<Avatar {...stringAvatar(discount.merchant.username)}/>
			</Box>
			<Box sx={{display: 'flex', flexDirection: 'column', marginLeft: '2%', alignItems: 'center', width: '70%'}} >
				<Typography sx={{fontWeight: 'bold'}}>{discount.merchant.username}</Typography>
				<Typography>{discount.start} - {discount.end}</Typography>
			</Box>
			<Box 
				sx={{
					justifySelf: 'end', 
					width: '15%',  
					height: '90%', 
					borderRadius: 3, 
					display: 'flex', 
					justifyContent: 'center', 
					alignItems: 'center',
				}}
			>
			<Typography sx={{fontWeight: 'bold'}} >{discount.discount} %</Typography>
			</Box>
		</Box>
	)  
}

export {DiscountCard}
