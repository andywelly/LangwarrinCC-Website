//import React from "react";
import Footer from "../components/Footer";
import CoverImage from "../components/CoverImage";
import NavigationBar from "../components/Navigation_Bar";
import HomeCard from "../components/Card";


function Home() {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <CoverImage/>
            <HomeCard></HomeCard>
            <Footer/>
        </div>
    );
}

export default Home;