import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const StartTrainingNow = () => {
  return (
    <Box sx={{margin:'0 auto',width:{lg:'700px',sm:'200px'},aspectRatio:'2/1', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;',marginTop:'2rem',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:'1rem'}}>
        <Typography sx={{color:'black',fontSize:'30px'}}>Start Training Now</Typography>
        <Button href='/workouts' variant='contained' sx={{padding:'1rem 4rem',borderRadius:'100vmax',backgroundColor:'#32cd32',fontWegith:'bolder'}}>Explore</Button>
    </Box>
  )
}

export default StartTrainingNow