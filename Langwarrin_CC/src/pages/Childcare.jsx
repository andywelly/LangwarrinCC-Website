//import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Grid from "../components/Grid";
function Childcare() {
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
        Childcare and Youth
      </h1>
      <Grid></Grid>
      <Footer />
    </div>
  );
}

export default Childcare;
