import { Button } from '@mui/material';
import { styled} from '@mui/system';
import { Link } from 'react-router-dom';

export const StyledLink=styled(Link)({
    fontSize:'30px',
    textDecoration:'none',
    color:"white",
    position:'relative',
    transition:'font-size .1s linear',
    textAlign:'center',
    '&::after':{
      content:'""',
      position:'absolute',
      width:'100%',
      height:'1px',
      maxWidth:'0',
      left:'0',
      bottom:'-5px',
      backgroundColor:'black',
      transition:'max-width .2s linear',
    },
    '&:hover::after':{
      maxWidth:'100%'
    },
    '&:hover':{
      fontSize:'40px'
    }
})

export const StyledButton=styled(Button)({
  fontSize:'30px',
  textDecoration:'none',
  color:"white",
  position:'relative',
  transition:'font-size .1s linear',
  textAlign:'center',
  textTransform:"capitalize",
  '&::after':{
    content:'""',
    position:'absolute',
    width:'100%',
    height:'1px',
    maxWidth:'0',
    left:'0',
    bottom:'-5px',
    backgroundColor:'black',
    transition:'max-width .2s linear',
  },
  '&:hover::after':{
    maxWidth:'100%'
  },
  '&:hover':{
    fontSize:'40px'
  }
})