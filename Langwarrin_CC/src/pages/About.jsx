import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import { API_URL } from "../constants";
import AboutSection from "../components/AboutSection";

function About() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/about?populate=deep`);
        console.log(response.data); // Log the response to inspect it
        setAboutData(response.data.data.attributes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  if (!aboutData) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  const { Title, Image } = aboutData; 

  const imageUrl = Image?.data?.attributes?.url;

  return (
    <div>
      <Header />

      {}
      {Title && (
        <h1
          style={{
            color: "#32CD32",
            fontSize: "3rem",
            textAlign: "center",
            margin: "20px 0",
          }}
        >
          {Title}
        </h1>
      )}

      {}
      {imageUrl && (
        <div style={{ textAlign: "center" }}>
          <img
            src={imageUrl}
            alt={Image.data.attributes.name || "About Us"}
            style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
          />
        </div>
      )}

      <AboutSection /> {}
      <Footer />
    </div>
  );
}

export default About;
