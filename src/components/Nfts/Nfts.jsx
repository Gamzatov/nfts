import React, {useState} from 'react';
import NftsItem from "./NftsItem";
import Loader from "../Loader";

const Nfts = ({items, loading, setShowPhoto, showPhoto}) => {
    console.log(items)
    const [show, setShow] = useState(false);
    const showToggle = () => {
        setShow(!show)
    }
    return (
        <div id='collection' className="container" id='collection'>
            {
                loading ? <Loader/>
                    :
                    <div className="nft_wrapper">
                        {
                            items.slice(0, show ? 100 : 20).map((el) => <NftsItem showPhoto={showPhoto}
                                                                                  setShowPhoto={setShowPhoto}
                                                                                  src={el.src}
                                                                                  link={el.info} id={el.id}
                                                                                  title={el.title}
                                                                                  key={el.id}/>)
                        }
                    </div>
            }
            <div className="btn_wrapper">
                <button onClick={showToggle} className='add_btn'>{show ? 'Показати менше' : 'Показати більше'}</button>
            </div>
        </div>
    );
};

export default Nfts;
