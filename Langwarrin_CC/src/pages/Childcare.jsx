import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Grid from "../components/Grid";
import axios from "axios";
import { API_URL } from "../constants"; // Make sure API_URL is correctly set

function Childcare() {
  const [title, setTitle] = useState("Childcare and Youth"); // default title in case data hasn't loaded
  const [description, setDescription] = useState(""); // default description

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/childcare?populate=deep`);
        const fetchedData = response.data.data.attributes;
        setTitle(fetchedData.Title);
        setDescription(fetchedData.Description);
      } catch (error) {
        console.error("Error fetching childcare data from Strapi:", error);
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
      <div style={{ textAlign: "center", margin: "20px" }}>
        {description
          ? description.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))
          : null}
      </div>
      <Grid />
      <Footer />
    </div>
  );
}

export default Childcare;
