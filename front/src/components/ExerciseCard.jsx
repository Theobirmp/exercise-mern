import { Paper,Typography } from '@material-ui/core'
import { Button, IconButton } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { WorkoutsContext } from '../context/WorkoutContext';
const ExerciseCard = (workout) => {
    const {title,reps,load,_id}=workout.workout
    const {dispatch}=useContext(WorkoutsContext)
    function handleDeleteRequest(id){
        async function deleteRequest(id){
          const response=await fetch(`http://localhost:4000/api/workouts/${id}`,{method:'DELETE'})
          const json = await response.json()
          if(response.ok) dispatch({type:'DELETE_WORKOUT',payload:id})
        }
      deleteRequest(id)
      }
  return (
    <Paper style={{padding:'1rem 2rem',display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'1rem'}} >
        <Box style={{display:'flex',justifyContent:'space-between',width:'100%',paddingRight:'2rem'}}>
            <Typography component='h3' style={{fontSize:'30px',fontWeight:'bold'}}>{title}</Typography>
            <IconButton onClick={handleDeleteRequest(_id)}>
                <DeleteIcon style={{width:'50px',height:'50px',color:'#E65F5C'}}/>
            </IconButton>
        </Box>
        <Typography component='span' style={{fontSize:'20px'}}>{reps}</Typography>
        <Typography component='span' style={{fontSize:'20px'}}>{load}</Typography>
    </Paper>
  )
}

export default ExerciseCard