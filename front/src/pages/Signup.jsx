import React, { useState } from 'react'
import { FormControl, TextField, Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import { useSignup } from '../hooks/useSignup'
import { SignupContainer } from '../styledComponents/SignupContainer'
import { PageContainer } from '../styledComponents/PageContainer'
import { SubmitButton } from '../styledComponents/SubmitButton'



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
        <h3 style={{textAlign:'center',marginTop:'2rem'}}>Welcome to <span style={{color:"#32cd32",fontSize:'1.5em'}}>Workout Buddy</span></h3>
        <h3 style={{textAlign:'center'}}>Create your Account for free and start tracking <br />your exercises</h3>
        <SignupContainer >
        <FormControl>
            <TextField value={email} onChange={(e)=>setEmail(e.target.value)} label='Email' style={{border:'solid 1px #32cd32'}}/>
        </FormControl>
        <FormControl>
            <TextField value={password} onChange={(e)=>setPassword(e.target.value)} label='Password' style={{border:'solid 1px #32cd32'}}/>
        </FormControl>
        <SubmitButton style={{margin:'0 auto'}} disabled={isLoading} onClick={handleSubmit}>Submit</SubmitButton>
        {error?(<Paper style={{padding:'1rem',backgroundColor:'#e65f5c',color:'white',fontWeight:'bold',margin:'0 auto'}}>{error}</Paper>):(<></>)}
        <p>Already have an account?Log in <Link to='/login'>here</Link></p>
        </SignupContainer>
    </PageContainer>
  )
}

export default Signup