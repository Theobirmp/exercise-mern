import React, { useState } from 'react'
import { FormControl, TextField, Paper } from '@mui/material'
import { SignupContainer} from '../styledComponents/SignupContainer'
import { PageContainer } from '../styledComponents/PageContainer'
import { SubmitButton } from '../styledComponents/SubmitButton'
import { useLogin } from '../hooks/useLogin'
import { Link } from 'react-router-dom'

const Login =  () => {
    const {login,isLoading,error}=useLogin()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleSubmit= async (e)=>{
        e.preventDefault()
        await login(email,password)
        console.log('submited the form - attempting to log in')
    }
  return (
    <PageContainer>
         <h3 style={{textAlign:'center',marginTop:'2rem'}}>Welcome Back. <br /> Feel free to login to access your workouts</h3>
        <SignupContainer>
        <FormControl>
            <TextField value={email} onChange={(e)=>setEmail(e.target.value)} label='Email' style={{border:'solid 1px #32cd32'}}/>
        </FormControl>
        <FormControl>
            <TextField value={password} onChange={(e)=>setPassword(e.target.value)} label='Password' style={{border:'solid 1px #32cd32'}}/>
        </FormControl>
        <SubmitButton style={{margin:'0 auto'}} disabled={isLoading} onClick={handleSubmit}>Submit</SubmitButton>
        {error?(<Paper style={{padding:'1rem',backgroundColor:'#e65f5c',color:'white',fontWeight:'bold',margin:'0 auto'}}>{error}</Paper>):(<></>)}
        <p>Don't have an account?Sign up <Link to='/signup'>here</Link></p>
        </SignupContainer>
    </PageContainer>
  )
}

export default Login