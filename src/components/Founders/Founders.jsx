import React from 'react';
import CarouselItem from "./CarouselItem";
import igor from '../../assets/img/founders/igor.jpg'
import julia from '../../assets/img/founders/julia.jpg'

const Founders = () => {
    return (
        <div className='container'>
            <p className="title">
                Наші фаундери
            </p>
            <div className="founders_wrapper">
                <CarouselItem insta='https://instagram.com/igod24'
                              name='Igor Morozuyk'
                              twitter='https://twitter.com/Igor_Morozuyk?t=JpjOpOcBufo8Iy3T9p9oaA&s=35'
                              telega='@igod24'
                              facebook='https://www.facebook.com/igor.comfort'
                              item='igor' img={igor} />
                <CarouselItem
                    insta='https://instagram.com/juliarekamie'
                    name='Julia Rekamie'
                    item='julia' img={julia}/>
            </div>

            <div className="text_wrapper">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur enim ex fuga hic
                    obcaecati odit optio provident quo recusandae. Deleniti exercitationem fugiat magnam maiores non
                    similique veniam voluptate voluptatum.
                </p>
            </div>

        </div>
    );
};

export default Founders;
