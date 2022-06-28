import { createContext, useState } from "react";

 const WorkoutContext = createContext()

export function WorkoutProvider({children}){
    const [workoutList,setWorkoutList]=useState('context api testing');
    return (
        <WorkoutContext.Provider value={{workoutList,setWorkoutList}}>
            {children}
        </WorkoutContext.Provider>
    )
}
