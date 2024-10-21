import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Grid from "../components/Grid";
import axios from "axios";

function Childcare() {
  const [title, setTitle] = useState("Childcare and Youth"); // default title in case data hasn't loaded

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/childcare");
        const fetchedTitle = response.data.data.attributes.Title;
        setTitle(fetchedTitle);
      } catch (error) {
        console.error("Error fetching childcare title from Strapi:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <h1
        style={{
          color: "#32CD32",
          fontSize: "3rem",
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        {title}
      </h1>
      <Grid />
      <Footer />
    </div>
  );
}

export default Childcare;
