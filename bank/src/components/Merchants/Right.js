import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { MerchantCard } from '../MerchantCard';


const Right = () => {
	const {merchants} = useSelector(state => state.merchants)
	return (
		<Box sx={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
		{merchants.map(merchant => {
			return <MerchantCard key={merchant.id} merchant={merchant}/>
		})}
		</Box>
	)
}

export {Right}