//mui imports
import {display, styled} from '@mui/system';
import { Box } from '@mui/material';
//images imports
import workoutImage1 from '../../public/images/swiperImage1.jpg'

//swiper imports
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import CustomCard from '../components/CustomCard'
import htmlImage from '../../public/images/techImages/html.jpg'
import cssImage from '../../public/images/techImages/css.jpg'
import jsImage from '../../public/images/techImages/js.jpg'
import reactImage from '../../public/images/techImages/react.jpg'
import muiImage from '../../public/images/techImages/mui.jpg'
import nodeImage from '../../public/images/techImages/node.jpg'
import mongoImage from '../../public/images/techImages/mongo.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../css/slider.css'
const SliderContainer = styled(Box)({
    width:'100%',
    // height:'500px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  })

const Slider = () => {
  return (
    <SliderContainer sx={{marginTop:{xs:'20px',md:'2rem'}}}>
   {/* SLIDER */}
   <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={10}
      slidesPerView={1}
      // style={{display:'flex',justifyContent:'center',alignItems:'center'}}
    >
      {/* <SwiperSlide>
            <div style={{display:'flex',flexDirection:'row',height:'100%'}}>
              <CustomCard title='css3' summary='Responsive Layouting, Animations' bgImage={cssImage}/>
              <img src={workoutImage1} alt=""/>
            </div>
        </SwiperSlide> */}
      <SwiperSlide><img src={workoutImage1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={workoutImage1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={workoutImage1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={workoutImage1} alt="" /></SwiperSlide>
    </Swiper>
   </SliderContainer>
  )
}

export default Slider
{/* <CustomCard title='html5' summary='Semantic HTML, Seo Frienly' bgImage={htmlImage}/>
      <CustomCard title='css3' summary='Responsive Layouting, Animations' bgImage={cssImage}/>
      <CustomCard title='js' summary='ES6+' bgImage={jsImage}/>
      <CustomCard title='react' summary='Routing,State Management' bgImage={reactImage}/>
      <CustomCard title='MUI' summary='Styled Components' bgImage={muiImage}/>
      <CustomCard title='Node/Express' summary='API creation server side logic' bgImage={nodeImage}/>
       <CustomCard title='Mongodb' summary='Fast and Clean' bgImage={mongoImage}/> */}