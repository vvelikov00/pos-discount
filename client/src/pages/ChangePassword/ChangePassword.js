import { Box, Typography, TextField, Button, Snackbar, Alert } from '@mui/material';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { merchnatsContinue } from '../../api/merchantsContinue';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/actions';

const ChangePassword = () => {
	const {user} = useSelector(state => state.user)
	const [error, setError] = useState('');
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = async (event) => {
		event.preventDefault()
		const newData = {
			username: user.username,
			phone: event.target.phone.value,
			password: event.target.password.value
		}

		const response =  await merchnatsContinue(newData);
		if(response.status === 400) {
			setError(response.data)
			setOpen(true)
		} else {
			dispatch(setUser(response.data))
			navigate('/')
		}

	}

	const handleClose = () => {
		setOpen(false)
		setError('')
	};


  return (
		<Box sx={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
			<Typography variant='h5'>Continue Your Registration</Typography>
			<form onSubmit={handleSubmit} style={{width: '32%'}}>
				<label htmlFor='phone' style={{fontSize: 20}} >Phone: </label>
				<TextField type='tel' id='phone' sx={{width: '100%'}} />
				<label htmlFor='password' style={{fontSize: 20}} >New password: </label>
				<TextField type='password' id='password' sx={{width: '100%'}} />
				<Button type='submit' variant='contained' sx={{width: '100%', marginTop: '5%', background: '#103d85'}} >Done</Button>
			</form>
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
			>
				<Alert onClose={handleClose} severity='error' >{error}</Alert>

			</Snackbar>
		</Box>
	)  
}

export {ChangePassword}
