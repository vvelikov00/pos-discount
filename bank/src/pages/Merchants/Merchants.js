import { Grid } from '@mui/material';
import { Right } from '../../components/Merchants';
import { Left } from '../../components/Left';

const Merchants = () => {
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

export {Merchants}