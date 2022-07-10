import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { Divider, Drawer, Menu, MenuItem, Stack } from '@mui/material';
import {styled} from '@mui/system';
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
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
    position:'relative',
    transition:'font-size .1s linear',
    '&::after':{
      content:'""',
      position:'absolute',
      width:'100%',
      height:'1px',
      maxWidth:'0',
      left:'0',
      bottom:'-5px',
      backgroundColor:'black',
      transition:'max-width .2s linear',
    },
    '&:hover::after':{
      maxWidth:'100%'
    },
    '&:hover':{
      fontSize:'40px'
    }
})
export default function ButtonAppBar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [isDrawerOpen,setIsDrawerOpen]=useState(false)
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <NavbarContainer sx={{height:'100px',backgroundColor:'primary'}}>
      {/* LOGO */}
        <Box sx={{display:'flex',alignItems:'center',px:'1rem'}}>
            <IconButton size='large' href='/'>
                <HomeIcon sx={{height:'60px',width:'60px',color:'white'}}/>
            </IconButton>
            <Typography component='h1' sx={{fontSize:{xs:'20px',md:'40px'}}} color='white'>Workout Buddy</Typography>
        </Box>
        {/* NAVIGATION LINKS */}
        <Box sx={{alignItems:'center',px:'1rem',gap:"4rem",display:{xs:'none',md:'flex'}}}>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/workouts'>Workouts</StyledLink>
        <StyledLink to='/about'>About</StyledLink>
        </Box>
        {/* PROFILE LOGIN SIGN UP LOGOUT */}
        <Box sx={{marginLeft:{xs:'auto',md:'unset'}}}>
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
        <Box sx={{display:{xs:'block',md:'none'}}} >
          <IconButton onClick={()=>setIsDrawerOpen(true)}><MenuIcon style={{height:'60px',width:'60px'}}/></IconButton>
          <Drawer anchor='right' open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}>
          <Stack style={{backgroundColor:'black',minHeight:'100vh',width:'250px'}} sx={{flexDirection:'column',alignItems:'center',px:'1rem',py:'5rem',gap:"4rem",display:{xs:'flex',md:'none'}}} >
            <StyledLink to='/'>Home</StyledLink>
            <Divider style={{backgroundColor:'white',height:'1px',width:'100%',marginTop:'-50px'}}></Divider>
            <StyledLink to='/workouts'>Workouts</StyledLink>
            <Divider style={{backgroundColor:'white',height:'1px',width:'100%',marginTop:'-50px'}}></Divider>
            <StyledLink to='/about'>About</StyledLink>
            <Divider style={{backgroundColor:'white',height:'1px',width:'100%',marginTop:'-50px'}}></Divider>
        </Stack>
          </Drawer>
        </Box>
    </NavbarContainer>
  );
}