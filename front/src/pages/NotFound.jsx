import { Stack } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const NotFound = () => {
  const navigate=useNavigate()
  const handleManualNavigate=()=>{
    navigate('/')
  }
  const [timer,setTimer]=useState(3)
  const handleReduceTimer=()=>{
    setTimeout(()=>{
      setTimer(timer-1)
    },1000)
  }
  useEffect(()=>{
    handleReduceTimer()
    if(timer==0) handleManualNavigate()
    return ()=>clearTimeout(handleReduceTimer)
  },[timer])
    return (
   <Stack mt={4} gap={4} style={{marginInline:'auto',width:'clamp(300px,50%,1000px)'}}>
       <div className="card" style={{width:'100%'}}>
      <div className="card-part"></div>
      <div className="card-part"></div>
      <div className="card-part"></div>
      <div className="card-part"></div>
      <button onClick={handleManualNavigate} className="learn-more">Go to Home Page</button>
    </div>
    <div>
        <h1 style={{textAlign:'center',fontSize:'20px',textWeight:'bold'}}>The Page you are looking for does not exist. <br /> Redirecting in {timer}...</h1>
    </div>
   </Stack>
  )
}

export default NotFound