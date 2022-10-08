import React from 'react';
import CarouselItem from "./CarouselItem";
import one from '../../assets/img/founders/1.png'
import two from '../../assets/img/founders/2.png'
import three from '../../assets/img/founders/3.png'
import four from '../../assets/img/founders/4.png'
import five from '../../assets/img/founders/5.png'
import six from '../../assets/img/founders/6.png'
import 'swiper/css';
import {Swiper, SwiperSlide} from "swiper/react";

const FoundersCarousel = () => {
    return (
        // <div className='container'>
        //
        //     <CarouselItem />
        // </div>
        <Swiper
            spaceBetween={50}
            slidesPerView={3}

            pagination={{ clickable: true }}

            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><CarouselItem /></SwiperSlide>
            <SwiperSlide><CarouselItem /></SwiperSlide>
            <SwiperSlide><CarouselItem /></SwiperSlide>
            <SwiperSlide><CarouselItem /></SwiperSlide>
            <SwiperSlide><CarouselItem /></SwiperSlide>
            <SwiperSlide><CarouselItem /></SwiperSlide>
        </Swiper>
    );
};

export default FoundersCarousel;
