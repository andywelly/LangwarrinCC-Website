//import React from "react";
import Footer from "./Footer";
import CoverImage from "./CoverImage";
import NavigationBar from "./Navigation_Bar";
import HomeCard from "./Card";


function App() {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <CoverImage/>
            <HomeCard></HomeCard>
            <Footer/>
        </div>
    );
}

export default App;