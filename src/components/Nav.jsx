import React from 'react';

const Nav = ({toggle,nav}) => {
    return (
        <div className='mob_nav'>
            <div className={ nav ? 'close_nav' : 'none'}>
                <button onClick={toggle}><ion-icon name="close-circle-outline"></ion-icon></button>
            </div>
            <div className="open_btn">
                <button className='nav_button' onClick={toggle}>
                    Open
                </button>
            </div>
        </div>
    );
};

export default Nav;
