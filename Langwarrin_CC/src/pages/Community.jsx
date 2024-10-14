//import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CommunityGrid from "../components/CommunityGrid";


function Community() {
    return (
        <div>
            <Header/>
            <br></br>
            <h1
            style={{
            color: "#32CD32",
            fontSize: "3rem",
            textAlign: "center",
            margin: "20px 0",
            }}
             >
            Community
            </h1>
            <CommunityGrid/>
            <br></br>
            <Footer/>
        </div>
    );
}

export default Community;