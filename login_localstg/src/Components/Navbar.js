import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'


export default function ButtonAppBar() {
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.clear();
    navigate("/Signup")
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='primary'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            User List Cards
          </Typography>
          <Button color="inherit" onClick={handleLogout}>LOGOUT</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
