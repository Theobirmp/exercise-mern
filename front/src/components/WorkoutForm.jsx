import { Box, Button, Paper, Stack, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { WorkoutsContext } from '../context/WorkoutContext'

const WorkoutForm = () => {
    const [titleInput,setTitleInput]=useState('')
    const [repsInput,setRepsInput]=useState('')
    const [loadInput,setLoadInput]=useState('')
    const [error,setError]=useState(false)
    const {state,dispatch}=useContext(WorkoutsContext)
    // function handleInputChange(e){
    //     setInput(e.target.value)
    //     console.log(state)
    //   }
      function handleSendPostRequest(){
        async function  postWorkout(){
          const response=await fetch('http://localhost:4000/api/workouts',{
            method:'POST',
            body:JSON.stringify({
              title:titleInput,
              load:loadInput,
              reps:repsInput
            }),headers: {
              "Content-type": "application/json; charset=UTF-8"
          }
          })
          if(!response.ok){
            setError(true)
            throw 'post request not done successfully'
          }
          const data=await response.json()
          dispatch({type:'ADD_WORKOUT',payload:data})
        }
        postWorkout()
        setError(false)
        setTitleInput('')
        setRepsInput('')
        setLoadInput('')
      }
  return (
    <Box sx={{alignSelf:{xs:'center',md:'flex-start'}}} style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',borderRadius:'20px',maxHeight:'500px',maxWidth:'500px',backgroundColor:'white',padding:'2rem'}}>
        <Stack gap={2}>
            <TextField label='title' required value={titleInput} onChange={(e)=>setTitleInput(e.target.value)}/>
            <TextField label='reps' required value={repsInput} onChange={(e)=>setRepsInput(e.target.value)}/>
            <TextField label='load' required value={loadInput} onChange={(e)=>setLoadInput(e.target.value)}/>
            <Button variant='contained' style={{backgroundColor:"#32cd32"}} onClick={handleSendPostRequest}>Add Your Favourite Workout</Button>
        </Stack>
        {error?(<Paper style={{padding:'1rem',backgroundColor:'#e65f5c',color:'white',fontWeight:'bold',margin:'30px auto'}}>The data you typed is not valid!</Paper>):(<></>)}
            
    </Box>
  )
}

export default WorkoutForm