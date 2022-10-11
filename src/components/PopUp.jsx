import React from 'react';
import {Route, Routes} from "react-router-dom";

const PopUp = ({big, title, link, showPhoto}) => {
    return (

            <div className={showPhoto ? 'photo_wrapper' : 'none'}>
                <div className="photo_inner">
                    <div className="photo_img">
                        <img src={big} alt=""/>
                    </div>
                    <div className="photo_info">
                        tetxtasdfyasd
                    </div>
                </div>
            </div>
    );
};

export default PopUp;
