import React, {useState} from 'react';
import NftsItem from "./NftsItem";
import Loader from "../Loader";

const Nfts = ({items, loading}) => {
    console.log(items)
    const [show, setShow] = useState(false);
    const showToggle = () => {
        setShow(!show)
    }
    return (
        <div id='collection' className="container" id='collection'>
            {
                loading ? <Loader />
                    :
            <div className="nft_wrapper">
                {
                    items.slice(0, 20).map((el) => <NftsItem src={el.src} link={el.info} title={el.title} key={el.id} />)
                }
                {
                    show ? items.slice(20, 100).map((el) => <NftsItem src={el.src} key={el.id} />) : ''
                }
            </div>
            }
            <div className="btn_wrapper">
                <button onClick={showToggle} className='add_btn'>{ show ? 'Показати менше' : 'Показати більше'}</button>
            </div>
        </div>
    );
};

export default Nfts;