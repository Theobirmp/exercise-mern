import { useAuthenticationContext } from "./useAuthenticationContext"

export const useLogout=()=>{
    const {dispatch}=useAuthenticationContext()
    const logout=()=>{
        localStorage.removeItem('user')
        dispatch({type:'LOGOUT'})
    }
return {logout}
}