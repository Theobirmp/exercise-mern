import { Box } from '@mui/material'
import React, { useEffect,useState } from 'react'
import { useContext } from 'react'
import ExerciseCard from '../components/ExerciseCard'
import { WorkoutsContext } from '../context/WorkoutContext'
const Workouts = () => {
    const {state,dispatch}=useContext(WorkoutsContext)
    const [input,setInput]=useState('')
    useEffect(()=>{
      console.log('fetching data')
      const fetchPromise=fetch('http://localhost:4000/api/workouts')
      fetchPromise.then(response=>response.json()).then(data=>dispatch({type:'FETCH_WORKOUTS',payload:data}))
    },[])
    function handleInputChange(e){
      setInput(e.target.value)
      console.log(state)
    }
    function handleSendPostRequest(){
      async function  postWorkout(){
        const response=await fetch('http://localhost:4000/api/workouts',{
          method:'POST',
          body:JSON.stringify({
            title:input,
            load:input,
            reps:input
          }),headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
        if(!response.ok){
          throw 'post request not done successfully'
        }
        const data=await response.json()
        dispatch({type:'ADD_WORKOUT',payload:data})
      }
      postWorkout()
      // fetch('http://localhost:4000/api/workouts',{
      //   method:'POST',
      //   body:JSON.stringify({
      //     title:input,
      //     load:input,
      //     reps:input
      //   }),headers: {
      //     "Content-type": "application/json; charset=UTF-8"
      // }
      // })
      // .then(response=>response.json()).then((json)=>dispatch({action:'ADD_WORKOUT',payload:json}))
    }
    
    console.log(state)
  return (
    <Box style={{display:'flex',justifyContent:'space-around',border:'solid 1px red',padding:'2rem'}}>
    <div style={{display:'flex',flexDirection:'column',backgroundColor:'lightgray',gap:'2rem',flexWrap:'wrap',padding:'1rem',width:'50%'}}>
      {state.workouts && state.workouts.map(workout=>(
        <ExerciseCard key={workout._id} workout={workout}/>
      ))}
    
    </div>
    <div>
      <input value={input} onChange={handleInputChange}/>
      <button onClick={handleSendPostRequest}>Send POST request</button>
    </div>
    </Box>
    // <>{state.workouts && state.workouts.map(workout=>
    // <div key={workout._id}>{workout.reps}
    // </div>
    // )}
    // <input value={input} onChange={handleInputChange}/>
    // <button onClick={handleSendPostRequest}>Send POST request</button>

    // <div>{JSON.stringify(state.workouts)}</div>
  )
}

export default Workouts