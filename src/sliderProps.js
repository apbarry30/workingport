import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Autoplay,
  Grid,
  EffectFade,
  EffectCreative,
  Virtual,
} from 'swiper';

import 'swiper/swiper-bundle.min.css';

// Install Swiper modules
SwiperCore.use([
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
  Virtual,
]);

export const salimovSlider = {
  portfolio: {
    loop: true,
    navigation: {
      nextEl: '.next-item',
      prevEl: '.prev-item',
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 30,
        navigation: false,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 0,
      },
      1025: {
        direction: 'vertical',
      },
    },
  },
  clients: {
    slidesPerView: 2,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1025: {
        slidesPerView: 3,
      },
    },
    spaceBetween: 50,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
  },
  portfolioItems: {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
  },
};

const MySwiper = () => {
  return (
      <div>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <Swiper {...salimovSlider.portfolio}>
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next next-item"></div>
          <div className="swiper-button-prev prev-item"></div>
        </div>
      </div>
  );
};

export default MySwiper;
