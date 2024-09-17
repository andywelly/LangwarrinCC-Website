//import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Grid from "../components/Grid";
import NavigationBar from "../components/Navigation_Bar";
import CoverImage from "../components/CoverImage";

function Childcare() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <CoverImage />
      <h1
        style={{
          color: "#32CD32",
          fontSize: "2rem",
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        Childcare and Youth
      </h1>
      <Grid></Grid>
      <Footer />
    </div>
  );
}

export default Childcare;
