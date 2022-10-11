import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

const Image = ({items}) => {
    const {id} = useParams();
    const navigate = useNavigate();
    return (
        <div className="card">

            <div className="card-image">
                <button className='close_image' onClick={() => navigate(-1)}>
                    <ion-icon name="close-circle-outline"></ion-icon>
                </button>
                {
                    items.filter((el) => el.id == id).map((el, index) =>
                        <div className="image_wrapper">
                            <img className='pop_img' src={el.src} key={index} alt={el.title}/>
                            <div className="card_info">
                                <p className="card_text">
                                    {el.title}
                                </p>
                                <div className="btn_wrapper">
                                    <a className='small_btn' href={el.link}>Посилання</a>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Image;
