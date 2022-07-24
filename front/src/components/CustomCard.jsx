import React from 'react'
import { styled} from '@mui/system';

const lineAnimationDuration="200ms"
const cardContentAnimationDuration="400ms"

const Card=styled('div')(({bgImage})=>({
    backgroundImage:`url(${bgImage})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundPosition:'center',
    width:'20rem',
    height:'24rem',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-end',
    '&:hover &':{
        backgroundColor:'black'
    },
    '&:hover .card-content':{
        transform:"translateY(0px)",
        backgroundColor:'hsla(0,0%,0%,.7)',
        transition:`transform linear ${cardContentAnimationDuration} ${lineAnimationDuration},background-color linear 100ms 700ms`
    },
    '&:hover .card-summary':{
        opacity:'1'
    },
    '&:hover .card-title::after':{
        transform:'scaleX(1)',
        trasformOrigin:'left',

    }
}))
const CardContent=styled('div')({
    height:'30%',
    padding:'.2em',
    pointerEvents:'none',
    display:'flex',
    flexDirection:'column',
    gap:'1.25rem',
    backgroundColor:'transparent',
    transform:'translateY(60%)',
    transition:`transform linear ${cardContentAnimationDuration} ${lineAnimationDuration}`,
})
const CardTitle=styled('h4')({
    fontSize:'1.5rem',
    fontWeight:'bold',
    fontFamily:'sans-serif',
    textTransform:'capitalize',
    letterSpacing:'1px',
    color:'white',
    textTransform:'uppercase',
    alignSelf:'flex-start',
    position:"relative",
    '&::after':{
        content:'""',
        position:'absolute',
        left:'0px',
        bottom:'-2px',
        width:"100%",
        height:'2px',
        backgroundColor:'lightgreen',
        transform:'scaleX(0)',
        transformOrigin:'left',
        transition:`transform linear ${lineAnimationDuration}`    
    }
})

const CardSummary=styled('p')({
    color:'white',
    opacity:'0',
    transition:'opacity linear 200ms 200ms'
})

const CustomCard = ({title,summary,bgImage}) => {
  return (
    <Card bgImage={bgImage}>
        <CardContent className='card-content'>
            <CardTitle className='card-title'>{title}</CardTitle>
            <CardSummary className='card-summary'>{summary}</CardSummary>
        </CardContent>
    </Card>
  )
}

export default CustomCard