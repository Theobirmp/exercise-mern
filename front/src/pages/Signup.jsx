import React, { useState } from 'react'
import { FormControl, TextField, Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import { useSignup } from '../hooks/useSignup'
import { SignupContainer } from '../styled components/SignupContainer'
import { PageContainer } from '../styled components/PageContainer'
import { SubmitButton } from '../styled components/SubmitButton'



const Signup =  () => {
    const {signUp,isLoading,error}=useSignup()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleSubmit= async(e)=>{
        e.preventDefault()
        await signUp(email,password)
        console.log('submited the form')
    }
  return (
    <PageContainer>
        <SignupContainer >
        <FormControl>
            <TextField value={email} onChange={(e)=>setEmail(e.target.value)} label='Email' style={{border:'solid 1px #32cd32'}}/>
        </FormControl>
        <FormControl>
            <TextField value={password} onChange={(e)=>setPassword(e.target.value)} label='Password' style={{border:'solid 1px #32cd32'}}/>
        </FormControl>
        <SubmitButton disabled={isLoading} onClick={handleSubmit}>Submit</SubmitButton>
        {error?(<Paper style={{padding:'1rem',backgroundColor:'#e65f5c',color:'white',fontWeight:'bold',margin:'0 auto'}}>{error}</Paper>):(<></>)}
        <Link to='/login'>already have an account?Log in here</Link>
        </SignupContainer>
    </PageContainer>
  )
}

export default Signup