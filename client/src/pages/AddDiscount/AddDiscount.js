import { Grid } from '@mui/material';
import { Right } from '../../components/Merchant/AddDiscount';
import { Left } from '../../components/Merchant/Left';

const AddDiscount = () => {
	return (
		<>
			<Grid container>
				<Grid item xs={0} md={3}>
					<Left/>
				</Grid>
				<Grid item xs={12} md={9}>
					<Right/>
				</Grid>
			</Grid>
		</>
	)
}

export {AddDiscount}
