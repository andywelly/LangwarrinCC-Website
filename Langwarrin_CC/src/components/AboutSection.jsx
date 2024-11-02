import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../constants";
import './styles/AboutSection.css';

function AboutSection() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/about?populate=deep`);
        console.log(response.data); // Log the response to inspect it
        setAboutData(response.data.data.attributes); // Correctly access the data from the response
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  if (!aboutData) {
    return <div>Loading...</div>;
  }

  const { Title, Sections, Image } = aboutData; // Destructure the data

  // Get the image URL if it exists
  const imageUrl = Image?.data?.attributes?.url;

  return (
    <div className="information-section">
      {/* Render sections dynamically */}
      {Sections && Sections.map((section, index) => (
        <section key={section.id}>
          {section.Title && <h2>{section.Title}</h2>}
          {section.Description1 && <p>{section.Description1}</p>}
          {section.Description2 && <p>{section.Description2}</p>}
        </section>
      ))}
    </div>
  );
}

export default AboutSection;
