//import React from "react";
//import Footer from "../components/Footer";
import CoverImage from "../components/CoverImage";
import NavigationBar from "../components/Navigation_Bar";
import HomeCarousel from "../components/Carousel";
import HomeCards from "../components/HomeCards";


function Home() {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <CoverImage/>
            <HomeCards></HomeCards>
            <HomeCarousel></HomeCarousel>
        </div>
    );
}

export default Home;