import React from 'react';
import one from '../assets/img/partners/1.jpg'
import two from '../assets/img/partners/2.jpg'
import three from '../assets/img/partners/3.jpg'
import four from '../assets/img/partners/4.jpg'
import five from '../assets/img/partners/5.jpg'

const Partners = () => {
    return (
        <div className="container">
            <div className="partners_logo">
                <div className="logo_item">
                    <img src={one} alt=""/>
                </div>
                <div className="logo_item">
                    <img src={two} alt=""/>
                </div>
                <div className="logo_item">
                    <img src={three} alt=""/>
                </div>
                <div className="logo_item">
                    <img src={four} alt=""/>
                </div>
                <div className="logo_item">
                    <img src={five} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Partners;