import React from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import OverSwiper from '../components/overSwiper'


import Slide1 from '../images/swiperPage1.jpg'
import Slide2 from '../images/swiperPage2.jpg'
import Slide3 from '../images/swiperPage3.jpg'
import Slide4 from '../images/swiperPage4.jpg'


SwiperCore.use([Navigation, Pagination])

const Carousel = () => {
    return(
        <div className='w-full relative z-10 max-w-screen-lg mx-auto'>
            <div className='hidden w-2/3 absolute z-30 left-0 right-0 top-1/3 mx-auto md:block'>
                <OverSwiper/>
            </div>
    <Swiper
      spaceBetween={1}
      slidesPerView={1}
      navigation={true}
      autoplay={true}
      loop={true}

    >
      <SwiperSlide><img src={Slide1} alt=''/></SwiperSlide>
      <SwiperSlide><img src={Slide2} alt=''/></SwiperSlide>
      <SwiperSlide><img src={Slide3} alt=''/></SwiperSlide>
      <SwiperSlide><img src={Slide4} alt=''/></SwiperSlide>
    </Swiper>
</div>
    )
}

export default Carousel