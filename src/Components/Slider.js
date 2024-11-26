import React from 'react'
import { Swiper , SwiperSlide } from 'swiper/react';
import { EffectCoverflow,Pagination,Navigation } from 'swiper/modules';
import  'swiper/css';
import  'swiper/css/effect-coverflow';
import  'swiper/css/pagination';
import  'swiper/css/navigation';
import './Slider.css';

import slide_Image_1 from '../Pictures/image-1.jpg';
import slide_Image_2 from '../Pictures/images-2.jpg';
import slide_Image_3 from '../Pictures/images-3.jpg';
import slide_Image_4 from '../Pictures/images-4.jpg';
import slide_Image_5 from '../Pictures/images-5.jpg';


export default function Slider() {
  return (
    <div className='container'>

       <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={'auto'}
        coverflowEffect={
          {
            rotate :0,
            stretch:0,
            depth:100,
            modifier:2.5
          }
        }
           pagination={{el:'.swiper-pagination',clickable:true}}
          
          modules={[EffectCoverflow,Pagination,Navigation]}
        className='swiper_container'

       >
          <SwiperSlide>
               <img src={slide_Image_1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
               <img src={slide_Image_2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
               <img src={slide_Image_3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
               <img src={slide_Image_4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
               <img src={slide_Image_5} alt="" />
          </SwiperSlide>

         <div className="slider-controler">
              <div className="swiper-pagination"></div>
         </div>

       </Swiper>

    </div>
  )
}

