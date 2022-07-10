import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Stack } from '@mui/material';
import {styled} from '@mui/system';
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const NavbarContainer=styled(Stack)({
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#32cd32',
    justifyContent:'space-between'
})
const StyledLink=styled(Link)({
    fontSize:'30px',
    textDecoration:'none',
    color:"white",
})
export default function ButtonAppBar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <NavbarContainer sx={{height:'100px',backgroundColor:'primary'}}>
        <Box sx={{display:'flex',alignItems:'center',px:'1rem'}}>
            <IconButton size='large' href='/'>
                <HomeIcon sx={{height:'60px',width:'60px',color:'white'}}/>
            </IconButton>
            <Typography fontSize='30px' color='white'>Workout Buddy</Typography>
        </Box>
        <Box sx={{display:'flex',alignItems:'center',px:'1rem',gap:"4rem"}}>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/workouts'>Workouts</StyledLink>
        <StyledLink to='/about'>About</StyledLink>
        </Box>
        <Box>
        <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        size='large'
        onClick={handleClick}
      >
        <AccountCircleIcon sx={{height:"80px",width:'80px'}}/>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
        </Box>
    </NavbarContainer>
  );
}