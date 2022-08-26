import { Box, styled } from '@mui/system'
import React from 'react'
import Slider from '../components/Slider'
import StartTrainingNow from '../components/StartTrainingNow'
import { useAuthenticationContext } from '../hooks/useAuthenticationContext'
import AccordionHome from '../components/AccordionHome'
const Home = () => {
  const {user}=useAuthenticationContext()
  return (
    <Box >
      <Slider/>
      {user?(<StartTrainingNow/>):
      (
      <>
        <Box m='3rem auto' 
        sx={{
        width:{xs:'300px',md:'500px',lg:'900px'},
        textAlign:'center'}}>
            <a style={{color:"#32cd32",
                       fontSize:'1.75rem',
                        textDecoration:'none',}}
                         href="/login">Log in to access your Workouts</a>
        </Box>
      </>
      )}
      <AccordionHome/>
    </Box>
  )
}

export default Home