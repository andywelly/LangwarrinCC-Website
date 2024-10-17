//import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AboutImage from "../components/AboutImage";
import AboutSection from "../components/AboutSection";



function About() {
    return (
        <div>
            <Header/>
            <h1
            style={{
            color: "#32CD32",
            fontSize: "3rem",
            textAlign: "center",
            margin: "20px 0",
            }}
            >
                Who Are We?
            </h1>
            <AboutImage/>
            <AboutSection/>
            <Footer/>
        </div>
    );
}

export default About;