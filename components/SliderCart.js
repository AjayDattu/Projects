'use client';
import React from 'react';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { A11y, Navigation, Pagination } from 'swiper/modules';

function SliderCart() {
  return (
    <div className="flex flex-col gap-5">
      <div className="font-Regular text-[35px] flex flex-col md:flex-row justify-start md:justify-between text-center">
        <div>Articles similaires</div>
        <div className="text-[#393939] text-[16px] cursor-pointer hover:underline">
          Voir toute la collection
        </div>
      </div>

      <div className="relative">
        {/* Custom Previous Button */}
        <button
          id="prev"
          className="swiper-button-prev bg-[#5CD2DD] text-white hover:bg-[#5CD2CC] transition absolute left-0 top-1/2 -translate-y-1/2 z-10"
          aria-label="Previous Slide"
        >
          🡠
        </button>

        {/* Custom Next Button */}
        <button
          className="swiper-button-next bg-[#5CD2DD] text-white hover:bg-[#5CD2CC] transition absolute right-0 top-1/2 -translate-y-1/2 z-10"
          aria-label="Next Slide"
          id="next"
        >
          🡢
        </button>

        {/* Swiper Component */}
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          modules={[Navigation, A11y, Pagination]}
          navigation={{
            nextEl: '#next',
            prevEl: '#prev',
          }}
          breakpoints={{
            // Responsive breakpoints for different screen sizes
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="w-full"
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default SliderCart;
