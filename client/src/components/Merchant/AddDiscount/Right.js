import { Box, Typography, Button } from '@mui/material';
import { useState } from 'react';
import {format} from 'date-fns';
import { useSelector } from 'react-redux';
import { addNewDiscount } from '../../../api/addNewDiscount';

const Right = () => {
	const {user} = useSelector(state => state.user)
	const [start, setStart] = useState(format(new Date(), 'yyyy-MM-dd'))
	const [end, setEnd] = useState(format(new Date(), 'yyyy-MM-dd'))
	const [percent, setPercent] = useState(1)

	const handleSubmit = async(event) => {
		event.preventDefault()
		const discount = {
			start,
			end,
			discount: percent,
			merchantId: user.id
		}
		const response = await addNewDiscount(discount)
		console.log(response)

	}
	
  return (
		<Box sx={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} >
			<Typography variant='h5'>Add new Discount</Typography>
			<form style={{width: '36%', display: 'flex', flexDirection: 'column', alignItems: 'center'}} onSubmit={handleSubmit} >
				<label htmlFor='start' style={{fontSize: 20, alignSelf: 'start'}} >Select start date</label>
				<input type="date" value={start} id="start" onChange={(event) => setStart(event.target.value)} style={{width: '100%', height: '6vh', fontSize: 18}} />
				<label htmlFor='end' style={{fontSize: 20, alignSelf: 'start'}} >Select end date</label>
				<input type="date" min={start} value={end} id="end" onChange={(event) => setEnd(event.target.value)} style={{width: '100%', height: '6vh', fontSize: 18}} />
				<label htmlFor='percent' style={{fontSize: 20, alignSelf: 'start'}} >Select a percentege</label>
				<input type="number" min={1} max={100} value={percent} id="percent" onChange={(event) => setPercent(event.target.value)} style={{width: '100%', height: '6vh', fontSize: 18}} />
				<Button variant='contained' type='submit' sx={{width: '100%', marginTop: '5%', background: '#103d85'}} >Done</Button>
			</form>
		</Box>
	)  
}

export {Right}
