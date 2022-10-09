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


    const FoundersCarousel = () => {
        return (
            <div>
                <CarouselItem/>
            </div>

        );
    };
};

