import React from 'react';
import NftsItem from "./NftsItem";

const Nfts = ({items}) => {
    return (
        <div id='collection' className="container" id='collection'>
            <div className="nft_wrapper">
                {
                    items.map((el) => <NftsItem src={el.src} key={el.id} />)
                }
            </div>
        </div>
    );
};

export default Nfts;
