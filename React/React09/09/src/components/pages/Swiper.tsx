import { Swiper as SwiperClass } from 'swiper'; // Swiper 클래스 타입 임포트
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const MySwiperComponent = () => {
  return (
    <Swiper
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper: SwiperClass) => console.log(swiper)} // SwiperClass 타입을 사용
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  );
};