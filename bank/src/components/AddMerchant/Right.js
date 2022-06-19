import { Box, Typography, TextField, Button, Snackbar, Alert } from '@mui/material';
import { useState } from 'react';
import { merchantRegister } from '../../api/merchantRegister';

const Right = () => {
	const [open, setOpen] = useState(false)
	const [error, setError] = useState('')
	const [message, setMessage] = useState('')
	const [password, setPassword] = useState('')

	function generatePassword() {
    let result           = '';
		let chars = [
			'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
			'abcdefghijklmnopqrstuvwxyz',
			'0123456789',
			'!@#$%&*^()'
		]
    for ( let i = 0; i < 10; i++ ) {
			const num = Math.floor(Math.random()*4)
      result += chars[num].charAt(Math.floor(Math.random() * 
			chars[num].length));
		}
		setPassword(result)
	}

	const handleSubmit = async(event) => {
		event.preventDefault()
		
		const user = {
			email: event.target.email.value,
			username: event.target.username.value,
			password
		}
		const response = await merchantRegister(user)
		if (response.status === 400) {
			setError(response.data)
			setOpen(true)
		} else if (response.status === 200) {
			setMessage('Account created successfully!')
			setOpen(true)
		}
	}

	const handleClose = () => {
		setOpen(false)
		setMessage('')
		setError('')
	};


  return (
		<Box sx={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} >
			<Typography variant='h5'> Add new merchant </Typography>
			<form onSubmit={handleSubmit} style={{width: '36%'}} >
				<label htmlFor="username" style={{fontSize: 20, marginTop: '1%'}} >Username:</label>
				<TextField type="text" id='username' sx={{width: '100%', marginTop: '1%'}}/>
				<label htmlFor="email" style={{fontSize: 20}} >Email:</label>
				<TextField type="email" id='email' sx={{width: '100%', marginTop: '1%'}}/>
				{!password ? (
					<Button sx={{width: '100%', marginTop: '4%'}} onClick={generatePassword} >Generate password</Button>
				) : (
					<Box sx={{height: '11%', marginTop: '4%', width: '100%', display: 'flex', justifyContent: 'center'}}>
						<Typography>**********</Typography>
					</Box>
				)}
				<Button type='submit' variant='contained' disabled={!password} sx={{width: '100%', marginTop: '4%', background: '#103d85'}} >Done</Button>
			</form>
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
			>
				<Alert onClose={handleClose} severity={message ? 'success' : 'error'} >{message ? message : error}</Alert>

			</Snackbar>
		</Box>
	)  
}

export {Right}
