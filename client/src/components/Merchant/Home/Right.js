import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { DiscountCard } from '../../DiscountCardMerchants';

const Right = () => {
	const {discounts} = useSelector(state => state.discounts)
	console.log(discounts)
	return (
		<Box sx={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
		{discounts.map(discount => (
			<DiscountCard key={discount.id} discount={discount}/>
		))}
		</Box>
	)
}

export {Right}