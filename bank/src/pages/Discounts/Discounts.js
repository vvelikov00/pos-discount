import { Grid } from '@mui/material';
import { Right } from '../../components/Discounts';
import { Left } from '../../components/Left';

const Discounts = () => {
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
};

export {Discounts}