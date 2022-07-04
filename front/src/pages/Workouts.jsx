import React, { useEffect,useState } from 'react'
import { useContext } from 'react'
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
    function handleDeleteRequest(id){
      async function deleteRequest(id){
        const response=await fetch(`http://localhost:4000/api/workouts/${id}`,{method:'DELETE'})
        const json = await response.json()
        if(response.ok) dispatch({type:'DELETE_WORKOUT',payload:id})
      }
    deleteRequest(id)
    }
    // console.log(state)
  return (
    <div style={{display:'flex',backgroundColor:'lightgray',gap:'2rem',flexWrap:'wrap',padding:'1rem'}}>
      {state.workouts && state.workouts.map(workout=>(
        <div key={workout._id} style={{display:'flex',flexDirection:'column',backgroundColor:'lightblue',width:'200px'}}>
          <h3>Title</h3>
          <span>{workout.title}</span>
          <span>{workout.reps}</span>
          <span>{workout.load}</span>
          <button onClick={()=>handleDeleteRequest(workout._id)}>Remove</button>
        </div>
      ))}
    <input value={input} onChange={handleInputChange}/>
    <button onClick={handleSendPostRequest}>Send POST request</button>
    </div>
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