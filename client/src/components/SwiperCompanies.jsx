// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';
import { DataCompanies } from '../data/dataCompanies';

export default function SwiperCompanies() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          '@1.50': {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {DataCompanies.map(({ logo }, i) => (
          <SwiperSlide key={i}>
            <div>
              <img src={logo} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
