import React from 'react'
import CustomCard from '../components/CustomCard'
import { styled } from '@mui/system'
import htmlImage from '../../public/images/techImages/html.jpg'
import cssImage from '../../public/images/techImages/css.jpg'
import jsImage from '../../public/images/techImages/js.jpg'
import reactImage from '../../public/images/techImages/react.jpg'
import muiImage from '../../public/images/techImages/mui.jpg'
import nodeImage from '../../public/images/techImages/node.jpg'
import mongoImage from '../../public/images/techImages/mongo.jpg'
import FlowerCardContainer from '../components/FlowerCardContainer'
const About = () => {
  const CardsContainer=styled('div')({
    maxWidth:"1400px",
    margin:'0 auto',
    display:'flex',
    justifyContent:'space-evenly',
    marginTop:'3rem',
    flexWrap:'wrap',
    rowGap:'1rem'
  })
  return (
    <CardsContainer>
      {/* <CustomCard title='html5' summary='Semantic HTML, Seo Frienly' bgImage={htmlImage}/>
      <CustomCard title='css3' summary='Responsive Layouting, Animations' bgImage={cssImage}/>
      <CustomCard title='js' summary='ES6+' bgImage={jsImage}/>
      <CustomCard title='react' summary='Routing,State Management' bgImage={reactImage}/>
      <CustomCard title='MUI' summary='Styled Components' bgImage={muiImage}/>
      <CustomCard title='Node/Express' summary='API creation server side logic' bgImage={nodeImage}/>
       <CustomCard title='Mongodb' summary='Fast and Clean' bgImage={mongoImage}/> */}
      <FlowerCardContainer/>
    </CardsContainer>
  )
}

export default About