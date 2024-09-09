//import React from "react";
import Footer from "../components/Footer";
import CoverImage from "../components/CoverImage";
import NavigationBar from "../components/Navigation_Bar";


function About() {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <CoverImage/>
            <h1>About</h1>
            <Footer/>
        </div>
    );
}

export default About;