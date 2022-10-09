import React from 'react';

const Navigation = ({nav}) => {
    return (
        <div className="container">
            <div className={nav ? "mob_nav" : "desktop nav"}>
                <ul className="nav_list">
                    <li className="nav_item">
                        <a href="#why_we">Чому саме наша колекція</a>
                    </li>
                    <li className="nav_item">
                        <a href="#collection">Огляд колекції</a>
                    </li>
                    <li className="nav_item">
                        <a href="#buy">Як придбати?</a>
                    </li>
                    <li className="nav_item">
                        <a href="#founders">Фаундери</a>
                    </li>
                    <li className="nav_item">
                        <a href="#contacts">Контакти</a>
                    </li>
                </ul>
                <ul className="socials_list">
                    <li className="socials_item telegram">
                    </li>
                    <li className="socials_item twitter">
                    </li>
                    <li className="socials_item discord">
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;
