//import React from "react";
//import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeCarousel from "../components/Carousel";
import HomeCards from "../components/HomeCards";


function Home() {
    return (
        <div>
            <Header/>
            <HomeCards/>
            <HomeCarousel/>
        </div>
    );
}

export default Home;