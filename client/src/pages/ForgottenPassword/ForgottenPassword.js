import { Box, Typography, TextField, Button, Snackbar, Alert } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { createToken } from "../../api/createToken";




const ForgottenPassword = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault()
    const user = {
      email: event.target.email.value
    }

    const response = await createToken(user)
		console.log(response)
    if(response.status === 400) {
      setError(response.data)
      setOpen(true)
    } else {
			navigate('/resetPassword')
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
          <label htmlFor="email" style={{fontSize: 20, marginTop: '1%'}} >Email:</label>
          <TextField type="email" id='email' sx={{width: '100%', marginTop: '1%'}}/>
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

export {ForgottenPassword}