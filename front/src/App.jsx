import { useState } from "react"
import { useEffect } from "react"
import { WorkoutProvider } from "./context/WorkoutContext"
import Home from "./components/Home"
function App() {
  const [data,setData]=useState([])
  
  useEffect(()=>{
      const fetchWorkouts = async ()=>{
        const response = await fetch('http://localhost:4000/api/workouts')
        const json = await response.json()
        if(response.ok){
          setData(json)
        }
      }
      fetchWorkouts()
  },[])
  return (
    <WorkoutProvider>
      <div className="App">
      {/* {workoutList} {data.map(item=>{
      return  <h1>{item.title}</h1>
      })} */}
      <Home/>
    </div>
    </WorkoutProvider>
  )
}

export default App
