import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Box, Typography,FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { stringAvatar } from '../../../functions/stringAvatar';
import { updateSubscription } from '../../../redux/actions';
import { useState } from 'react';
import { updateSub } from '../../../api/cardholderUpdateSub';

const CardholderLeft = () => {
  const {user} = useSelector(state => state.user);
  const [subscription, setSubscription] = useState(user.subscription)
  const dispatch = useDispatch();
  // let subscription = user.subscription;

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
        <Box sx={{display: 'flex', flexDirection: 'column', marginLeft: '5%', height: '80vh', justifyContent: 'flex-end'}} >
          <FormGroup>
            <FormControlLabel control={<Checkbox checked={subscription} onChange={handleChange} />} label='Subscribe for newsletter'/>
          </FormGroup>
        </Box>
      </Box>
    </>
  )  
}

export {CardholderLeft}