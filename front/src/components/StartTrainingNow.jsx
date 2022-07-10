import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styled from '@emotion/styled'
const AnimatedButton=styled('button')({
  position:'relative',
  backgroundColor:'#32cd32',
  borderRadius:'100vmax',
  color:'white',
  fontSize:'30px',
  border:'none',
  padding:'1rem 2.25rem',
  cursor:'pointer',
  '&::after':{
    content:'""',
    position:'absolute',
    width:'100%',
    maxWidth:'0',
    height:'100%',
    backgroundColor:'blue',
    opacity:'.1',
    inset:'0',
    borderRadius:'100vmax',
    transition:'max-width .2s linear',
    
  },
  '&:hover::after':{
    maxWidth:'100%',
  }
})
const StartTrainingNow = () => {
  return (
    <Box sx={{margin:'0 auto',width:'clamp(200px,70%,700px)',
    aspectRatio:'2/1', 
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;',
    marginTop:'2rem',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    gap:'1rem',
    padding:'2rem'}}>
        <Typography sx={{color:'black',fontSize:'30px',minWidth:'max-content'}}>Start Training Now</Typography>
        <AnimatedButton href='/workouts' variant='contained' sx={{padding:'1rem 4rem',borderRadius:'100vmax',backgroundColor:'#32cd32',fontWegith:'bolder'}}>Explore</AnimatedButton>
    </Box>
  )
}

export default StartTrainingNow