import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { stringAvatar } from '../../functions/stringAvatar';


const Left = () => {
  const {user} = useSelector(state => state.user);
	const navigate = useNavigate();

  return (
    <>
      <Box sx={{background: '#f7f7f7', height: '100vh', display: 'flex', flexDirection: 'column'}} >
        <Box sx={{ width: '90%', height: '7%', marginLeft: '5%', marginTop: '5%', display: 'flex', alignItems: 'center' }} >
          <Avatar {...stringAvatar(user.username)}/>
          <Typography sx={{marginLeft: '2%', fontSize: 20}} >{user.username}</Typography>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', marginLeft: '5%'}} >
          <Typography>Email: {user.email}</Typography>
        </Box>
				<Box sx={{display: 'flex', flexDirection: 'column', marginLeft: '5%', width: '90%', marginTop: '10%'}} >
					<Button variant='contained' sx={{background: '#103d85', textTransform: 'none'}} onClick={() => navigate('/')} >Home</Button>
          <Button variant='contained' sx={{background: '#103d85', textTransform: 'none', marginTop: '5%'}} onClick={() => navigate('/addMerchant')} >+Add new merchant</Button>
					<Button variant='contained' sx={{background: '#103d85', textTransform: 'none', marginTop: '5%'}} onClick={() => navigate('/discounts')} >Discounts</Button>
					<Button variant='contained' sx={{background: '#103d85', textTransform: 'none', marginTop: '5%'}} onClick={() => navigate('/merchants')} >Merchants</Button>

        </Box>
      </Box>
    </>
  )  
}

export {Left}