import React from 'react';
import logo from '../assets/img/logo/logo.png'
import omniflix from '../assets/img/logo/omniflix.png'

const Head = () => {
    return (
        <div className="header_container">
            <div className="logo_wrapper">
                <img className="logo_img" src={logo} alt="main_logo"/>
                <img className="partner_logo" src={omniflix} alt="Omniflix"/>
            </div>
            <div className="partner_wrapper">

            </div>
        </div>
    );
};

export default Head;
