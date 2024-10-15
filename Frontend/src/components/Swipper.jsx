import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Swipper = () => {
  return (
    <Swiper
      loop={true}
      spaceBetween={-10}
      grabCursor={true}
      slidesPerView={3}
      centeredSlides="auto"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="w-full h-fit max-w-[auto] mx-auto scale-75 ">
          <img src="book-1.png" alt="book-1" className="rounded-xl  " />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full max-w-[auto] mx-auto scale-75">
          <img src="book-2.png" alt="book-2" className="rounded-xl  " />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full max-w-[auto] mx-auto scale-75">
          <img src="book-1.png" alt="book-1" className="rounded-xl  " />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full max-w-[auto] mx-auto scale-75">
          <img src="book-2.png" alt="book-2" className="rounded-xl  " />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Swipper;
