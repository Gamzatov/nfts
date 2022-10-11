import './App.css';
import Navigation from "./components/Navigation";
import Head from "./components/Head";
import WhyWe from "./components/WhyWe";
import HowToBuy from "./components/HowToBuy";
import Founders from "./components/Founders/Founders";
import Partners from "./components/Partners";
import {useEffect, useState} from "react";
import Nfts from "./components/Nfts/Nfts";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import {Route, Routes} from "react-router-dom";
import Image from "./components/Image";

function App() {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }


    const [items, setItems] = useState([]);
    const [showPhoto, setShowPhoto] = useState(false);
    const [isLoading, setLoading] = useState(true);
    console.log('app', isLoading)
    useEffect(() => {
        setLoading(true);
        fetch('https://6320334e9f82827dcf271256.mockapi.io/nft')
            .then((res) => res.json())
            .then((json) => {
                setItems(json)
            })
            .then(() => {
                setLoading(false)
            })
    }, []);
    const [nav, setNav] = useState(false);
    const toggleNav = () => {
        setNav(!nav);
    }
    const togglePhoto = () => {
        setShowPhoto(!showPhoto)
    }
    return (
        <div className="App">
            <Nav toggle={toggleNav} nav={nav}/>
            <Navigation nav={nav} windowSize={windowSize} getWindowSize={getWindowSize} setNav={toggleNav}/>
            <Head/>
            <WhyWe/>
            <Partners/>
            <Nfts items={items} loading={isLoading}  showPhoto={showPhoto} setShowPhoto={togglePhoto}/>
            <HowToBuy/>
            <Founders/>
            <Form />
            <Footer/>
            <div className="single_img">
                <Routes>
                    <Route path='/id:id' element={<Image items={items}/>} />
                </Routes>
            </div>
            <div className="container footer_container">
                <p>
                    © Ukraine Charity arts, 2022
                </p>
            </div>
        </div>
    );
}

export default App;
