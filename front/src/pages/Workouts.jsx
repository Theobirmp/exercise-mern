import { Box } from '@mui/material'
import React, { useEffect,useState } from 'react'
import { useContext } from 'react'
import ExerciseCard from '../components/ExerciseCard'
import WorkoutForm from '../components/WorkoutForm'
import { WorkoutsContext } from '../context/WorkoutContext'
import { useAuthenticationContext } from '../hooks/useAuthenticationContext'
const Workouts = () => {
    const {user}=useAuthenticationContext()
    const {state,dispatch}=useContext(WorkoutsContext)
    // useEffect(()=>{
    //   if(user){
    //     console.log('fetching data')
    //   const fetchPromise=fetch('http://localhost:4000/api/workouts',{headers:{
    //     'Authorization':`Bearer ${user.token}`
    //   }})
    //   fetchPromise.then(response=>response.json()).then(data=>dispatch({type:'FETCH_WORKOUTS',payload:data}))
    //   }
    // },[user])
    useEffect(() => {
      const fetchWorkouts = async () => {
        const response = await fetch('http://localhost:4000/api/workouts', {
          headers: {'Authorization': `Bearer ${user.token}`},
        })
        const json = await response.json()
  
        if (response.ok) {
          dispatch({type: 'FETCH_WORKOUTS', payload: json})
        }
      }
  
      if (user) {
        fetchWorkouts()
      }
    }, [dispatch, user])
    console.log(state)
  return (
    <Box style={{
    display:'flex',
    justifyContent:'space-around',
    padding:'2rem',
    backgroundColor:'#f1f1f1',
    minHeight:'100vh',
    border:'solid 1px yellow'
  }}
    sx={{
    flexDirection:{xs:'column',md:'row'},
    alignItems:{xs:'center',md:'flex-start'}}}>

    <div style={{
    display:'flex',flexDirection:'column',
    gap:'2rem',
    flexWrap:'wrap',
    padding:'1rem',
    width:{xs:'100%',md:'60%'},
    // minWidth:{xs:'300px',md:'600px',lg:'800px'},
    border:'solid 1px black',
    justifyContent:'flex-start'}}>
      
      {state.workouts?.length!=0 && state.workouts?.map(workout=>(
        <ExerciseCard key={workout._id} workout={workout}/>
      ))}
    
    </div>
    <WorkoutForm/>
    </Box>
  )
}

export default Workouts