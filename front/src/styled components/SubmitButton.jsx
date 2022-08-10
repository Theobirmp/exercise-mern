import {styled} from '@mui/system'
import { Button } from '@mui/material'
export const SubmitButton=styled(Button)({
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