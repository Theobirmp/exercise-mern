import { useAuthenticationContext } from "./useAuthenticationContext"
import { WorkoutsContext } from "../context/WorkoutContext"
import { useContext } from "react"

export const useLogout=()=>{
    const {dispatch}=useAuthenticationContext()
    const {dispatch:workoutsDispatch}=useContext(WorkoutsContext)
    const logout=()=>{
        localStorage.removeItem('user')
        dispatch({type:'LOGOUT'})
        workoutsDispatch({type:'RESET_WORKOUTS',payload:null})
    }
return {logout}
}