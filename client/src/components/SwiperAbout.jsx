// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';
import { DataTestimonials } from '../data/dataTestimonials';
import { TestimonialCard } from './TestimonialCard';

import Swiper1 from '../assets/images/swiper-about-1.webp';
import Swiper2 from '../assets/images/swiper-about-2.webp';
import Swiper3 from '../assets/images/swiper-about-3.webp';
import Swiper4 from '../assets/images/swiper-about-4.webp';
import Swiper5 from '../assets/images/swiper-about-5.webp';

export default function SwiperAbout() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Swiper1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Swiper2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Swiper3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Swiper4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Swiper5} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
