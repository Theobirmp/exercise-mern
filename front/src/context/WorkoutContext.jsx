import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext('this is not working ffs')

const initialState={
    workouts:[]
}
export const workoutReducer = (state,action)=>{
    switch (action.type) {
        case 'FETCH_WORKOUTS':
            return {
                ...state,workouts:action.payload
                // workouts:action.payload
            }
        case 'ADD_WORKOUT':
            return {
                ...state,workouts:[action.payload,...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {
                ...state,workouts:state.workouts.filter(workout=>{
                    if(workout._id===action.payload) return
                    return workout
                })
            }
        default :
            return state
    }
}
export const WorkoutsProvider = ({children})=>{
    const [state,dispatch]=useReducer(workoutReducer,initialState)
    return (
        <WorkoutsContext.Provider value={{state,dispatch}}>
            {children}
        </WorkoutsContext.Provider>)
    
}