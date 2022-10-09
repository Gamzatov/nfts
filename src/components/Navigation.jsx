import React from 'react';
import {Link, animateScroll as scroll} from "react-scroll";

const Navigation = ({nav, setNav}) => {
    return (
        <div className="container" id='top'>
            <div className={nav ? "mob_nav" : "desktop nav"}>
                <ul className="nav_list">
                    <li  className="nav_item">
                        <Link onClick={setNav} to="#why_we"
                              spy={true}
                              smooth={true}>Чому саме наша колекція</Link>
                    </li>
                    <li className="nav_item">
                        <Link onClick={setNav} to="collection"
                              spy={true}
                              smooth={true}>Огляд колекції</Link>
                    </li>
                    <li className="nav_item">
                        <Link onClick={setNav} to="buy"
                              spy={true}
                              smooth={true}>Як придбати?</Link>
                    </li>
                    <li className="nav_item">
                        <Link onClick={setNav} to="founders"
                              spy={true}
                              smooth={true}>Фаундери</Link>
                    </li>
                    <li className="nav_item">
                        <Link onClick={setNav} to="contacts"
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
