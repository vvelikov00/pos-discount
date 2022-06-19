import { Grid } from '@mui/material';
import { CardholderLeft } from '../../components/Cardholder/Left';
import { Right } from '../../components/Cardholder/Right';

const CardholderHome = () => {
  return (
		<>
			<Grid container>
				<Grid item xs={0} md={3}>
					<CardholderLeft/>
				</Grid>
				<Grid item xs={12} md={9}>
					<Right/>
				</Grid>
			</Grid>
		</>
	)  
};

export {CardholderHome}
