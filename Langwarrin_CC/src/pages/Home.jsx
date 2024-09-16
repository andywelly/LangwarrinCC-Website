//import React from "react";
//import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeCarousel from "../components/Carousel";
import HomeCards from "../components/HomeCards";
import Footer from "../components/Footer";


function Home() {
    return (
        <div>
            <Header/>
            <HomeCards/>
            <HomeCarousel/>
            <Footer/>
        </div>
    );
}

export default Home;