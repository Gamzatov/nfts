import React from 'react';
import FoundersCarousel from "./FoundersCarousel";

const Founders = () => {
    return (
        <div className='container'>
            <p className="title">
                Наші фаундери
            </p>
            <div className="text_wrapper">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur enim ex fuga hic
                    obcaecati odit optio provident quo recusandae. Deleniti exercitationem fugiat magnam maiores non
                    similique veniam voluptate voluptatum.
                </p>
            </div>
            <FoundersCarousel/>
        </div>
    );
};

export default Founders;
