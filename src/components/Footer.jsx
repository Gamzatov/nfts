import React from 'react';
import logo from "../assets/img/logo/logo.png";
import omniflix from "../assets/img/logo/omniflix.png";
import Navigation from "./Navigation";

const Footer = () => {
    return (
        <div className='container'>
            <div className="footer_controls">
                <div className="footer_logo">
                    <img src={omniflix} alt=""/>
                </div>
                <div className="footer_btn">
                    <button>
                        <ion-icon name="arrow-up-circle-outline"></ion-icon>   До початку
                    </button>
                </div>
            </div>
            <Navigation/>
        </div>
    );
};

export default Footer;
