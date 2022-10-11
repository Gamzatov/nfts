import React from 'react';
import one from '../assets/img/partners/1.jpg'
import two from '../assets/img/partners/2.png'
import three from '../assets/img/logo/omniflix.png'
import four from '../assets/img/partners/4.png'
import five from '../assets/img/partners/poshta.png'

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
