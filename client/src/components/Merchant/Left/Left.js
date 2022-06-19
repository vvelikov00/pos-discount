import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Box, Typography, FormGroup, Button, FormControlLabel, Checkbox } from '@mui/material';
import { stringAvatar } from '../../../functions/stringAvatar';
import { updateSubscription } from '../../../redux/actions';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateSub } from '../../../api/merchantUpdateSub';

const Left = () => {
  const {user} = useSelector(state => state.user);
  const [subscription, setSubscription] = useState(user.subscription)
  const dispatch = useDispatch();
	const navigate = useNavigate();

  const handleChange = () => {
    setSubscription(!subscription)
    updateSub(user.id)
    dispatch(updateSubscription(!user.subscription))
  }

  return (
    <>
      <Box sx={{background: '#f7f7f7', height: '100vh', display: 'flex', flexDirection: 'column'}} >
        <Box sx={{ width: '90%', height: '7%', marginLeft: '5%', marginTop: '5%', display: 'flex', alignItems: 'center' }} >
          <Avatar {...stringAvatar(user.username)}/>
          <Typography sx={{marginLeft: '2%', fontSize: 20}} >{user.username}</Typography>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', marginLeft: '5%'}} >
          <Typography>Email: {user.email}</Typography>
          <Typography>Phone: {user.phone}</Typography>
        </Box>
				<Box sx={{display: 'flex', flexDirection: 'column', marginLeft: '5%', width: '90%', marginTop: '10%'}} >
					<Button variant='contained' sx={{background: '#103d85', textTransform: 'none'}} onClick={() => navigate('/')} >Home</Button>
          <Button variant='contained' sx={{background: '#103d85', textTransform: 'none', marginTop: '5%'}} onClick={() => navigate('/addDiscount')} >+Add new discount</Button>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', marginLeft: '5%', height: '65vh', justifyContent: 'flex-end'}} >
          <FormGroup>
            <FormControlLabel control={<Checkbox checked={subscription}  />} onChange={handleChange} label='Subscribe for newsletter'/>
          </FormGroup>
        </Box>
      </Box>
    </>
  )  
}

export {Left}
