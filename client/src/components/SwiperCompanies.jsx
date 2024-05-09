import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { DataCompanies } from '../data/dataCompanies';

export default function SwiperCompanies() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className=""
      >
        {[...DataCompanies, ...DataCompanies].map(({ logo }, i) => (
          <SwiperSlide key={i} className='h-36 flex items-center'>
            <div>
              <img src={logo} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
