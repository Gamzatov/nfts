import React from 'react';
import omniflix from '../assets/img/logo/omniflix.png'
const HowToBuy = () => {
    return (
        <div className='container' id='buy'>
            <p className="title">Як придбати</p>
            <div className="text_warapper">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ea exercitationem facere fugit ipsam natus, nobis quia. Beatae enim et, ipsa laborum omnis porro quae qui sapiente sunt, tempore vitae?
                </p>
                <div className="button_wrapper">
                    <button className="main_btn">Придбати</button>
                  <img src={omniflix} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default HowToBuy;
