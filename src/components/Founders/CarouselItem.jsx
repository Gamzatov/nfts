import React from 'react';
import one from '../../assets/img/founders/1.png'
import two from '../../assets/img/founders/2.png'
import three from '../../assets/img/founders/3.png'
import four from '../../assets/img/founders/4.png'
import five from '../../assets/img/founders/5.png'
import six from '../../assets/img/founders/6.png'
const CarouselItem = () => {
    return (
        <div className='founder'>
            <div className="founder_img">
                <img src={one} alt=""/>
            </div>
            <div className="founder_info">
                <p className='founder_name'>Name of Founder</p>
                <p className="founder_job">artist</p>
            </div>
            
        </div>
    );
};

export default CarouselItem;
