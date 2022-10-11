import React, {useEffect, useState} from 'react';
import {Link, animateScroll as scroll} from "react-scroll";

const Navigation = ({nav, setNav}) => {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }

    return (
        <div className="container" id='top'>
            <div className={nav ? "mob_nav" : "desktop nav"}>
                <ul className="nav_list">
                    <li  className="nav_item">
                        <Link onClick={windowSize.innerWidth <= 762 ? setNav : ''} to="#why_we"
                              spy={true}
                              smooth={true}>Чому саме наша колекція</Link>
                    </li>
                    <li className="nav_item">
                        <Link onClick={windowSize.innerWidth < 762 ? setNav : ''} to="collection"
                              spy={true}
                              smooth={true}>Огляд колекції</Link>
                    </li>
                    <li className="nav_item">
                        <Link  onClick={windowSize.innerWidth < 762 ? setNav : ''} to="buy"
                              spy={true}
                              smooth={true}>Як придбати?</Link>
                    </li>
                    <li className="nav_item">
                        <Link onClick={windowSize.innerWidth < 762 ? setNav : ''} to="founders"
                              spy={true}
                              smooth={true}>Фаундери</Link>
                    </li>
                    <li className="nav_item">
                        <Link onClick={windowSize.innerWidth < 762 ? setNav : ''} to="contacts"
                              spy={true}
                              smooth={true}>Контакти</Link>
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
