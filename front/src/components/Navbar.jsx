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
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { useLogout } from '../hooks/useLogout';
import { useAuthenticationContext } from '../hooks/useAuthenticationContext'
import {NavbarContainer} from '../styledComponents/NavbarContainer'
import {StyledLink} from '../styledComponents/StyledLink'
import {StyledButton} from '../styledComponents/StyledLink'



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
    const {logout}=useLogout()
    function handleLogout(){
      logout()
      setAnchorEl(null);
    }
const {user}=useAuthenticationContext()
  return (
    <NavbarContainer sx={{height:'100px',backgroundColor:'primary'}}>
      {/* LOGO */}
        <Box sx={{display:'flex',alignItems:'center',px:'1rem'}}>
            <IconButton size='large' href='/'>
                <HomeIcon sx={{height:'60px',width:'60px',color:'white'}}/>
            </IconButton>
            <Typography component='h1' sx={{fontSize:{xs:'20px',md:'30px'}}} color='white'>Workout Buddy</Typography>
        </Box>
        {/* NAVIGATION LINKS */}
        <Box sx={{alignItems:'center',px:'1rem',gap:"4rem",display:{xs:'none',md:'flex'}}}>
        <StyledLink style={{width:'80px'}} to='/'>Home</StyledLink>
        <StyledLink style={{width:'130px'}} to={user?'/workouts':'/login'}>Workouts</StyledLink>
        <StyledLink style={{width:'80px'}} to='/about'>About</StyledLink>
        </Box>
        {/* PROFILE LOGIN SIGN UP LOGOUT */}
        {user?(<Box sx={{marginLeft:{xs:'auto',md:'unset'}}}>
        <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        size='large'
        onClick={handleClick}
        style={{position:'relative'}}
        sx={{display:{xs:'none',md:"block"}}}
      >
        {/* <p style={{position:'absolute',fontSize:'1.75rem',width:'100%',height:'0%',top:'100%',display:'flex',justifyContent:'center',alignItems:'center',color:"red"}}>{user.email.substr(0,2 )}</p> */}
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
        <p style={{marginBottom:"1rem",fontSize:'1.25rem',padding:'0rem 1rem',fontWeightL:'bold'}}>{user.email}</p>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
        {/* {user?(<button onClick={handleLogout}>logout</button>):(<></>)} */}

      </Menu>
    </div>
    {/* mobile navigation */}
        </Box>):<></>}
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
            {user?(<>
            <StyledLink to='/about'>Profile</StyledLink>
            <Divider style={{backgroundColor:'white',height:'1px',width:'100%',marginTop:'-50px'}}></Divider>
            <StyledLink to='/about'>My Account</StyledLink>
            <Divider style={{backgroundColor:'white',height:'1px',width:'100%',marginTop:'-50px'}}></Divider>
            <StyledButton onClick={handleLogout}>Logout</StyledButton>
            <Divider style={{backgroundColor:'white',height:'1px',width:'100%',marginTop:'-50px'}}></Divider>
            </>)
            :
            (<>
              <StyledLink to='/signup'>Sign up</StyledLink>
              <Divider style={{backgroundColor:'white',height:'1px',width:'100%',marginTop:'-50px'}}></Divider>
              <StyledLink to='/login'>Log in</StyledLink>
              <Divider style={{backgroundColor:'white',height:'1px',width:'100%',marginTop:'-50px'}}></Divider>
            </>)}
        </Stack>
          </Drawer>
        </Box>
        {!user?(<Box sx={{display:{xs:'none',md:'flex'},gap:'1rem',mr:4}}>
        <Link style={{
        // display:{sx:'none',md:'none'},
        padding:'.5em 1em',
        border:'none',
        backgroundColor:'lightblue',
        color:'black',
        textDecoration:'none',
        fontSize:'1.25rem'}}
        to='/signup'>Signup</Link>
        <Link style={{padding:'.5em 1em',
        border:'none',
        backgroundColor:'lightblue',
        color:'black',
        textDecoration:'none',
        fontSize:'1.25rem'}} to='/login'>Login</Link>
        </Box>):<></>}
    </NavbarContainer>
  );
}