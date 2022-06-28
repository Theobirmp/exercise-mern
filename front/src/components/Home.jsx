import React, { useContext } from 'react'
import {WorkoutContext} from '../context/WorkoutContext'
const Home = () => {
    const {workoutList}=useContext(WorkoutContext)
  return (
    <div>{workoutList}</div>
  )
}

export default Home