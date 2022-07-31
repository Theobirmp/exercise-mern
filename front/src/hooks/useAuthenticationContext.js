import { AuthenticationContext } from "../context/AuthContext"
import { useContext } from "react"

export function useAuthenticationContext(){
    const context=useContext(AuthenticationContext)
    if(!context) throw Error('cant access context outside context provider')
    return context
}