import React, { useEffect, useReducer } from "react";
import { createContext } from "react";

export const AuthenticationContext=createContext(null)

export function authenicationReducer(state,action){
    switch (action.type) {
        case 'LOGIN':
            return {...state,user:action.payload}
        case 'LOGOUT':
            return {...state,user:null}
        default:
            return null
    }
}

export function AuthenticationProvider({children}){
    const [state,dispatch]=useReducer(authenicationReducer,{
        user:null
    })
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
    
        if (user) {
          dispatch({ type: 'LOGIN', payload: user }) 
        }
      }, [])
    
      console.log('AuthContext state:', state)
    return(
        <AuthenticationContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthenticationContext.Provider>
    )
}