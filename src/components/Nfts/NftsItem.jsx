import React from 'react';
import ModalImage from "react-modal-image";

const NftsItem = ({src, title, info}) => {
    return (
        <div className='nft_item'>
            {/*<img src={src} alt=""/>*/}
            <ModalImage
                small={src}
                description={title}
                link={info}
                hideDownload={true}
                alt={title}
            />
        </div>
    );
};

export default NftsItem;
