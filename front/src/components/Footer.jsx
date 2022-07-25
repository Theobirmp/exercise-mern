import React from "react"
import {styled} from "@mui/system"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { IconButton, Typography } from "@mui/material";
const FooterContainer=styled('div')({
    marginTop:'10rem',
    height:'10rem',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'hsla(0,100%,100%,.7)',
    borderTop:'solid 1px #32cd32'
})
const FooterContent=styled('div')({
    display:'flex',
    justifyContent:'space-around',
    '& .icon':{
        position:'relative',
        height:'100px',
        width:'100px',
    },'.icon-relative':{
        // color:'red',
        fontSize:'7rem',
        width:'100px',
        height:'100px',
    },
    '.icon-absolute':{
        position:'absolute',
        width:'100px',
        height:'100px',
        inset:'0',
        fontSize:'7rem',
        // height:'0px',
        transition:'height linear 200ms',
        overflow:'hidden',
        transform:"scale(0)",
        transition:'transform linear 200ms'
        // color:"black",
    },
    '& .icon:hover':{
        '.icon-absolute':{
            transform:"scale(1)",
        }
    },
    '& .icon:nth-child(1) .icon-absolute':{
        color:'#171515',
    },
    '& .icon:nth-child(2) .icon-absolute':{
        color:'#0077b5',
    },
    '& .icon:nth-child(3) .icon-absolute':{
        color:'#BB001B',
    }
    
})
const Footer = () => {
  return (
    <FooterContainer>
        <Typography component='h3' style={{textTransform:"capitalize",fontSize:'2rem',fontWeight:'bold',textAlign:'center'}}>Feel Free to Contact Me</Typography>
        <FooterContent>
                <IconButton className="icon" disableRipple onClick={()=>window.open('https://github.com/theobirmp')}>
                    <GitHubIcon className="icon-relative"/>
                    <GitHubIcon className="icon-absolute"/>
                </IconButton>
                <IconButton className="icon" disableRipple onClick={() => window.open('https://www.linkedin.com/in/theofanis-birmpilis-0566ba245/')}>
                    <LinkedInIcon className="icon-relative"/>
                    <LinkedInIcon className="icon-absolute"/>
                </IconButton>
                <IconButton className="icon" disableRipple onClick={()=>{window.open('mailto:theobirmpil@gmail.com')}}>
                    <EmailIcon className="icon-relative"/>
                    <EmailIcon className="icon-absolute"/>
                </IconButton>
        </FooterContent>
    </FooterContainer>
  )
}

export default Footer