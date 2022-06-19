import { Box, Typography, TextField, Button, Snackbar, Alert, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cardholderLogin } from "../../api/cardholderLogin";
import { useState } from "react";
import { setDiscounts, setType, setUser } from "../../redux/actions";
import { merchnatsLogin } from "../../api/merchantsLogin";
import { getMyDiscounts } from "../../api/getMyDiscounts";
import { getAllDiscounts } from "../../api/getAllDiscounts";


const Login = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(true);
  const [type, setCurrentType] = useState('Cardholder')
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault()
    const user = {
      username: event.target.username.value,
      password: event.target.password.value
    }

    let response;
    if(type === 'Cardholder') {
      response = await cardholderLogin(user)
    } else {
      response = await merchnatsLogin(user)
    }
    if(response.status === 400) {
      setError(response.data)
      setOpen(true)
    } else {
      dispatch(setType({type}))
      dispatch(setUser(response.data))
      if(response.data.firstTime) {
        navigate('/changePassword')
      } else {
        if(type === 'Merchant') {
          const resp = await getMyDiscounts(response.data.id)
          if (resp.status === 200) {
            dispatch(setDiscounts(resp.data))
          }
        } else {
          const resp = await getAllDiscounts()
          if (resp.status === 200) {
            dispatch(setDiscounts(resp.data))
          }
        }
        navigate('/')
      }
    }
  };

  const handleChange = (event) => {
    setCurrentType(event.target.value)
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
        <FormControl sx={{marginTop: '3%', width: '100%'}}>
						<InputLabel>Profile type</InputLabel>
						<Select value={type} label='Profile Type' onChange={handleChange} >
							<MenuItem value='Cardholder'>Cardholder</MenuItem>
							<MenuItem value='Merchant'>Merchant</MenuItem>
						</Select>
					</FormControl>
        <form onSubmit={handleLogin} >
          <label htmlFor="username" style={{fontSize: 20, marginTop: '1%'}} >Username:</label>
          <TextField type="text" id='username' sx={{width: '100%', marginTop: '1%'}}/>
          <label htmlFor="password" style={{fontSize: 20}} >Password:</label>
          <TextField type="password" id='password' sx={{width: '100%', marginTop: '1%'}}/>
          <Button type="submit" variant="contained" sx={{marginTop: '2%', width: '100%', background: '#103d85'}}>Sign in</Button>
          <Box sx={{marginTop: '2%', width: '100%', display: 'flex', justifyContent: 'center'}} >
            <Link to='/register' style={{color: '#103d85', marginLeft: '2%', textDecoration: 'none', fontWeight: 'bold'}} >Create account</Link>
          </Box>
          <Box sx={{marginTop: '2%', width: '100%', display: 'flex', justifyContent: 'center'}} >
            <Link to='/forgottenPassword' style={{color: 'black'}} >Forgot password?</Link>
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