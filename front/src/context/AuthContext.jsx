import React, { Children, useReducer } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthenticationContext=createContext(null)

export function authenicationReducer(action,payload){
    switch (action.type) {
        case 'LOGIN':
            return {...state,user:action.payload}
        case 'LOGOUT':
            return {...state,user:null}
        default:
            return state
    }
}

export function AuthenticationProvider({children}){
    const [state,dispatch]=useReducer(authenicationReducer,{
        user:null
    })
    console.log(state)
    return(
        <AuthenticationContext.Provider value={{state,dispatch}}>
            {children}
        </AuthenticationContext.Provider>
    )
}