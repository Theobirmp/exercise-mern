import { useState } from "react"
import { useAuthenticationContext } from "./useAuthenticationContext"

export const useSignup=()=>{
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState()
    const {dispatch}=useAuthenticationContext()
    const signUp = async (email,password)=>{
        setIsLoading(true)
        setError(false)
        const response = await fetch('http://localhost:4000/api/user/signup',{
            method:'POST',
            body:JSON.stringify({email,password}),
            headers:{
                "Content-type": "application/json"
            },
        })
        console.log(response)
        const json=await response.json()
        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            localStorage.setItem('user',JSON.stringify(json))
            dispatch({type:'LOGIN',payload:json})
            setError(false)
            setIsLoading(false)
        }
    }
    return {signUp,isLoading,error}
}