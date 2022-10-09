import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";



const WhyWe = () => {
    return (
        <div className="container" id="#why_we">
            <div className="text_container">
                <p className="title">
                    Чому саме наша колекція?
                </p>
                <p className="text">
                    Одна з головних технічних переваг Ukraine Charity Art - це ексклюзивне партнерство з OmniFlix
                    Marketplace, що базується на блокчейні Cosmos - одній з найперспективніших екосистем.
                </p>
                <p className="text">
                    Художня цінність нашої колекції - це роботи, які були створені здебільшого під час війни, поки виють
                    сирени та летять снаряди. Крім самого NFT, ми пропонуємо створення ексклюзивної фізичної марки із
                    зображенням придбаного витвору мистецтва, яку надсилаємо покупцеві. Маркою можна користуватися за
                    призначенням, адже вона буде створена у партнерстві з Укрпоштою, або ж зберігати як предмет
                    колекції.
                </p>
                <p className="text">
                    І найголовніше. Кожен придбаний NFT - це придбана каска, бронежилет та інші необхідні спорядження та
                    предмети для наших військових. Це ще один крок до неминучої перемоги України. Звіти по закупівлях на
                    кошти, зібрані з продажу NFT, публікуються на Ukrincom.
                </p>
                <p className="text">
                    Наближаємо кінець руського корабля разом!
                </p>
                <div className="btn_wrapper">
                    <Link
                        to='contacts'
                        spy={true}
                        smooth={true}
                        className="main_btn">ПРИДБАТИ</Link>
                </div>
            </div>
        </div>
    );
};

export default WhyWe;
