import React, {useEffect, useState} from 'react';
import CarouselItem from "./CarouselItem";
import one from '../../assets/img/founders/1.png'
import two from '../../assets/img/founders/2.png'
import three from '../../assets/img/founders/3.png'
import four from '../../assets/img/founders/4.png'
import five from '../../assets/img/founders/5.png'
import six from '../../assets/img/founders/6.png'
import 'swiper/css';
// const width = window.innerHeight()
// console.log(width)
import {Swiper, SwiperSlide} from "swiper/react";

export default function App() {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }

    console.log(windowSize)
    const FoundersCarousel = () => {
        return (
            <div>
                <CarouselItem/>
            </div>
            // <Swiper
            //     spaceBetween={50}
            //     slidesPerView={windowSize <= 762 ? 2 : 3 }
            //     pagination={{clickable: true}}
            //     navigation
            //     onSlideChange={() => console.log('slide change')}
            //     onSwiper={(swiper) => console.log(swiper)}
            // >
            //     <SwiperSlide><CarouselItem/></SwiperSlide>
            //     <SwiperSlide><CarouselItem/></SwiperSlide>
            //     <SwiperSlide><CarouselItem/></SwiperSlide>
            //     <SwiperSlide><CarouselItem/></SwiperSlide>
            //     <SwiperSlide><CarouselItem/></SwiperSlide>
            //     <SwiperSlide><CarouselItem/></SwiperSlide>
            // </Swiper>
        );
    };
};

