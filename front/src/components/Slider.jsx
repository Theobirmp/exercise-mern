//mui imports
import {styled} from '@mui/system';
import { Box } from '@mui/material';
//images imports
import workoutImage1 from '../../public/images/swiperImage1.jpg'

//swiper imports
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

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
      style={{display:'flex',justifyContent:'center',alignItems:'center'}}
    >
      <SwiperSlide><img src={workoutImage1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={workoutImage1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={workoutImage1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={workoutImage1} alt="" /></SwiperSlide>
    </Swiper>
   </SliderContainer>
  )
}

export default Slider