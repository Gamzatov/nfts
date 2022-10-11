import React from 'react';
import {Link} from "react-router-dom";

const NftsItem = ({src, id}) => {
    return (
        <div className='nft_item'>
           <Link to={`/id${id}`}> <img src={src} alt=""/></Link>
        </div>
    );
};

export default NftsItem;
