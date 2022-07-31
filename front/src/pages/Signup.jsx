import React, { useState } from 'react'
import { FormControl, FormHelperText, TextField, InputLabel, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { Box } from '@mui/system'
import { styled } from '@mui/system'
const SignupContainer=styled(Box)({
    display:'flex',
    flexDirection:'column',
    gap:'2rem',
    marginTop:'2rem'
})
const PageContainer=styled(Box)({
    // height:'100vh',
    width:'100%',
    display:'grid',
    placeContent:'center'
})
const SubmitButton=styled(Button)({
    padding:'.25rem .75rem',
    backgroundColor:'#32cd32',
    border:'none',
    borderRadius:'8px',
    color:'white',
    fontSize:'1.25rem',
    height:'60px',
    width:'300px',
    '&:hover':{
        backgroundColor:"#32cd32",
        fontWeight:'bold',
        fontSize:'1.35rem'
    }
})
const handleSubmit=(e)=>{
    e.prevetDefault()
    //make the request to backend
}
const Signup = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
  return (
    <PageContainer>
        <SignupContainer >
        <FormControl>
            <TextField value={email} onChange={(e)=>setEmail(e.target.value)} label='Email' style={{border:'solid 1px #32cd32'}}/>
        </FormControl>
        <FormControl>
            <TextField value={password} onChange={(e)=>setPassword(e.target.value)} label='Password' style={{border:'solid 1px #32cd32'}}/>
        </FormControl>
        <SubmitButton onSubmit={handleSubmit}>Submit</SubmitButton>
        <Link to='/login'>already have an account?Log in here</Link>
        </SignupContainer>
    </PageContainer>
  )
}

export default Signup