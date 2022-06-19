import { Box, Typography, TextField, Button, Snackbar, Alert } from "@mui/material"
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { cardholderRegistration } from "../../api/cardholderRegistration";


const Register = () => {
	const [open, setOpen] = useState(false);
	const [error, setError] = useState('');
	const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault()
    const user = {
      username: event.target.username.value,
      password: event.target.password.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      cardNumber: event.target.card.value
    }
    const response = await cardholderRegistration(user)
    if(response.status === 400) {
			setError(response.data)
			setOpen(true)
		} else {
			navigate('/')
		}
  }

	const handleClose = () => {
		setOpen(false)
		setError('')
	}

  return (
    <>
    <Typography variant="h4" sx={{marginLeft: '5%', marginTop: '2%'}} >POS Discount</Typography>
		<Box sx={{width: '100vw', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
			<Box sx={{width: '30%', height: '90%'}} >
				<Typography variant="h5">Register</Typography>
				<form onSubmit={handleRegister} >
					<label htmlFor="username" style={{fontSize: 20, marginTop: '1%'}} >Username:</label>
					<TextField type="text" id='username' sx={{width: '100%', marginTop: '1%'}}/>
					<label htmlFor="email" style={{fontSize: 20}} >Email:</label>
					<TextField type="email" id='email' sx={{width: '100%', marginTop: '1%'}}/>
					<label htmlFor="phone" style={{fontSize: 20}} >Phone number:</label>
					<TextField type="tel" id='phone' sx={{width: '100%', marginTop: '1%'}}/>
					<label htmlFor="card" style={{fontSize: 20}} >Card number:</label>
					<TextField type="number" id='card' sx={{width: '100%', marginTop: '1%'}}/>
					<label htmlFor="valid" style={{fontSize: 20}} >Valid until:</label>
					<TextField type="text" id='valid' sx={{width: '100%', marginTop: '1%'}} required/>
					<label htmlFor="password" style={{fontSize: 20}} >Password:</label>
					<TextField type="password" id='password' sx={{width: '100%', marginTop: '1%'}}/>
					<Button type="submit" variant="contained" sx={{marginTop: '2%', width: '100%', background: '#103d85'}}>Sign up</Button>
					<Box sx={{marginTop: '2%', width: '100%', display: 'flex', justifyContent: 'center'}} >
						<Typography variant="p">Already have an account?</Typography>
						<Link to='/' style={{color: '#103d85', marginLeft: '2%', textDecoration: 'none', fontWeight: 'bold'}} >Sign in</Link>
					</Box>
				</form>
			</Box>
		</Box>
    <Snackbar
			open={open}
			autoHideDuration={6000}
			onClose={handleClose}
    >
			<Alert onClose={handleClose} severity='error' >{error}</Alert>

    </Snackbar>
    </>
    
  )  
}

export {Register}