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
      <Grid></Grid>
      <Footer />
    </div>
  );
}

export default Childcare;
