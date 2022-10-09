import React from 'react';
import ModalImage from "react-modal-image";

const NftsItem = ({src}) => {
    return (
        <div className='nft_item'>
            {/*<img src={src} alt=""/>*/}
            <ModalImage
                small={src}
                alt="Hello World!"
            />;
        </div>
    );
};

export default NftsItem;
