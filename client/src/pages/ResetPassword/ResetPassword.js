import { Box, Typography, TextField, Button, Snackbar, Alert } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { setNewPassword } from "../../api/setNewPassword";




const ResetPassword = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault()
		const password = event.target.password.value
		const passwordr = event.target.passwordr.value
		if(password !== passwordr) {
			setError('Wrong passwords!')
			setOpen(true)
			return
		}
    const user = {
      token: event.target.token.value,
			password
    }

    const response = await setNewPassword(user)
		console.log(response)
    if(response.status === 400) {
      setError(response.data)
      setOpen(true)
    } else {
			console.log(response.data)
      // dispatch(setUser(response.data))
			navigate('/')
    }
  };


  const handleClose = () => {
		setOpen(false)
		setError('')
	};


  return (
    <>
    <Typography variant="h4" sx={{marginLeft: '5%', marginTop: '2%'}} >POS Discount</Typography>
    <Box sx={{width: '100vw', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
      <Box sx={{width: '30%', height: '90%'}} >
        <Typography variant="h5" sx={{alignSelf: 'start'}}>Forgotten Password</Typography>
        <form onSubmit={handleSubmit} >
          <label htmlFor="token" style={{fontSize: 20, marginTop: '1%'}} >Token:</label>
          <TextField type="password" id='token' sx={{width: '100%', marginTop: '1%'}}/>
					<label htmlFor="password" style={{fontSize: 20, marginTop: '1%'}} >Password:</label>
          <TextField type="password" id='password' sx={{width: '100%', marginTop: '1%'}}/>
					<label htmlFor="passwordr" style={{fontSize: 20, marginTop: '1%'}} >Repeat Password:</label>
          <TextField type="password" id='passwordr' sx={{width: '100%', marginTop: '1%'}}/>
					<Button variant="contained" type="submit" sx={{width: '100%', marginTop: '4%', background: '#103d85'}} >Done</Button>
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

export {ResetPassword}