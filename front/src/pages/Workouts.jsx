import { CodeSharp } from '@material-ui/icons'
import { Box } from '@mui/material'
import React, { useEffect,useState } from 'react'
import { useContext } from 'react'
import ExerciseCard from '../components/ExerciseCard'
import WorkoutForm from '../components/WorkoutForm'
import { WorkoutsContext } from '../context/WorkoutContext'
const Workouts = () => {
    const {state,dispatch}=useContext(WorkoutsContext)
    useEffect(()=>{
      console.log('fetching data')
      const fetchPromise=fetch('http://localhost:4000/api/workouts')
      fetchPromise.then(response=>response.json()).then(data=>dispatch({type:'FETCH_WORKOUTS',payload:data}))
    },[])
    console.log(state)
  return (
    <Box style={{display:'flex',justifyContent:'space-around',padding:'2rem',backgroundColor:'#f1f1f1',minHeight:'100vh'}}
    sx={{flexDirection:{xs:'column',md:'row'},alignItems:{xs:'center'}}}>
    <div style={{display:'flex',flexDirection:'column',gap:'2rem',flexWrap:'wrap',padding:'1rem',width:'60%'}}>
      {state.workouts && state.workouts.map(workout=>(
        <ExerciseCard key={workout._id} workout={workout}/>
      ))}
    
    </div>
    <WorkoutForm/>
    </Box>
  )
}

export default Workouts