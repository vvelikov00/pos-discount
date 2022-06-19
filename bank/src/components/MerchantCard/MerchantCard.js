import { Box, Typography, Avatar } from '@mui/material';
import { stringAvatar } from '../../functions/stringAvatar';

const MerchantCard = ({merchant}) => {
	return (
		<Box sx={{width: '50%', background: '#f5f5f5', display: 'flex', marginTop: '2%', alignItems: 'center', justifyContent: 'center', paddingTop: '1%', paddingBottom: '1%', borderRadius: 4}} >
			<Box sx={{width: 50, height: 50, borderRadius: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '2%', justifySelf: 'start'}} >
				<Avatar  {...stringAvatar(merchant.username)}/>
			</Box>
			<Box sx={{display: 'flex', flexDirection: 'column', marginLeft: '2%', alignItems: 'center', width: '70%'}} >
				<Typography sx={{fontWeight: 'bold'}}>{merchant.username}</Typography>
				<Typography>Joined on: {merchant.createdAt}</Typography>
				<Typography>{merchant.email}</Typography>
			</Box>
		</Box>
	)  
}

export {MerchantCard}
