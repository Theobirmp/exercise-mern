import { Box, styled } from '@mui/system'
import React from 'react'
import Slider from '../components/Slider'
import StartTrainingNow from '../components/StartTrainingNow'
const Home = () => {
  return (
    <Box >
      <Slider/>
      <StartTrainingNow/>
    </Box>
  )
}

export default Home