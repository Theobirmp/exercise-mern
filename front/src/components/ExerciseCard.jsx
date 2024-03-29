import { Paper,Typography } from '@mui/material'
import { IconButton } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { WorkoutsContext } from '../context/WorkoutContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useAuthenticationContext } from '../hooks/useAuthenticationContext';
const ExerciseCard = (workout) => {
  const {user}=useAuthenticationContext()
    const {title,reps,load,_id,createdAt}=workout.workout
    const {dispatch}=useContext(WorkoutsContext)
    function handleDeleteRequest(id){
        async function deleteRequest(id){
          const response=await fetch(`http://localhost:4000/api/workouts/${id}`,{method:'DELETE',headers:{
            'Authorization':`Bearer ${user.token}`
          }})
          const json = await response.json()
          if(response.ok) dispatch({type:'DELETE_WORKOUT',payload:id})
        }
        if(!user){
          return
        }
      deleteRequest(id)
      }
  return (
    <Paper style={{border:'solid 1px pink',width:'100%',padding:'1rem 2rem',display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'1rem',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',borderRadius:'20px'}} >
        <Box style={{display:'flex',justifyContent:'space-between',width:'100%',paddingRight:'2rem',gap:'3rem'}}>
            <Typography component='h3' style={{fontSize:{xs:'15px',md:'30px'},fontWeight:'bold',minWidth:'max-content'}}>{title}</Typography>
            <IconButton onClick={()=>handleDeleteRequest(_id)}>
                <DeleteIcon style={{marginLeft:'auto',width:'25px',height:'25px',color:'#E65F5C'}}/>
            </IconButton>
        </Box>
        <div style={{width:'70%',height:'2px',backgroundColor:"#f5f7dc",marginTop:"-2rem"}}></div>
        <Typography component='span' style={{fontSize:'20px'}}>{reps} reps</Typography>
        <Typography component='span' style={{fontSize:'20px'}}>{load} kg</Typography>
        <Typography component='span' style={{fontSize:'15px',color:'#0F0326'}}>{formatDistanceToNow(new Date(createdAt),{addSuffix:true})}</Typography>
    </Paper>
  )
}

export default ExerciseCard