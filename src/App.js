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

function App() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://6320334e9f82827dcf271256.mockapi.io/nft')
            .then((res) => res.json())
            .then((json) => setItems(json))
    }, []);
    const [nav, setNav] = useState(false);
    const toggleNav = () => {
        setNav(!nav);
    }
    return (
        <div className="App">
            <Nav toggle={toggleNav} nav={nav}/>
            <Navigation nav={nav}/>
            <Head/>
            <WhyWe/>
            <Partners/>
            <Nfts items={items}/>
            <HowToBuy/>
            <Founders/>
            <Form />
            <Footer/>
            <div className="container footer_container">
                <p>
                    © Ukraine Charity arts, 2022
                </p>
            </div>
        </div>
    );
}

export default App;
