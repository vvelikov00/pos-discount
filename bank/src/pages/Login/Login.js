import { Box, Typography, TextField, Button, Snackbar, Alert } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { setDiscounts, setMerchants, setUser } from "../../redux/actions";
import { bankLogin } from "../../api/login";
import { getAllDiscounts } from "../../api/getAllDiscounts";
import { getAllMerchants } from "../../api/getAllMerchants";


const Login = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault()
    const user = {
      username: event.target.username.value,
      password: event.target.password.value
    }

    const response = await bankLogin(user)
    if(response.status === 400) {
      setError(response.data)
      setOpen(true)
    } else {
      dispatch(setUser(response.data))
			const resp = await getAllDiscounts()
			if (resp.status === 200) {
				dispatch(setDiscounts(resp.data))
			}
			const merchResp = await getAllMerchants()
			if (merchResp.status === 200) {
				dispatch(setMerchants(merchResp.data))
			}
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
        <Typography variant="h5" sx={{alignSelf: 'start'}}>Login</Typography>
				<Typography>Bank Employees</Typography>
        <form onSubmit={handleLogin} >
          <label htmlFor="username" style={{fontSize: 20, marginTop: '1%'}} >Username:</label>
          <TextField type="text" id='username' sx={{width: '100%', marginTop: '1%'}}/>
          <label htmlFor="password" style={{fontSize: 20}} >Password:</label>
          <TextField type="password" id='password' sx={{width: '100%', marginTop: '1%'}}/>
          <Button type="submit" variant="contained" sx={{marginTop: '2%', width: '100%', background: '#103d85'}}>Sign in</Button>
          <Box sx={{marginTop: '2%', width: '100%', display: 'flex', justifyContent: 'center'}} >
            <Link to='/register' style={{color: '#103d85', marginLeft: '2%', textDecoration: 'none', fontWeight: 'bold'}} >Create account</Link>
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

export {Login}