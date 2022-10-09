import React from 'react';

const CarouselItem = ({item, name, insta, facebook, telega, twitter}) => {
    return (
        <div className='founder'>
            <div className={item + " founder_img"}>
                {/*<img src={img} alt=""/>*/}
            </div>
            <div className=" founder_info">
                <p className='founder_name'>{name}</p>
                <ul className="social">
                    <li>{facebook ? <a href={facebook} className="fa fa-facebook">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a> : ''}</li>
                    <li>{twitter ? <a href={twitter} className="fa fa-twitter">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </a> : ''}</li>
                    <li><a href={telega} className="fa fa-google-plus">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </a></li>
                    <li><a href={insta} className="fa fa-linkedin">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a></li>
                </ul>
            </div>

        </div>
    );
};

export default CarouselItem;
