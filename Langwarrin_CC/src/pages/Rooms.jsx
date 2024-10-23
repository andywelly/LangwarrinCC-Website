import React, { useState, useEffect } from "react"; 
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RoomsGrid from "../components/RoomsGrid";
import { API_URL } from "../constants"; // Make sure API_URL is correctly set

function Community() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch room data from Strapi API
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/room-hire?populate=deep`);
        setData(response.data.data.attributes); // Store the attributes directly
      } catch (error) {
        console.error("Error fetching data from Strapi API:", error);
      }
    };

    fetchData();
  }, []);

  // Function to render the hire rules with appropriate formatting
  const renderTextWithFormatting = (textArray) => {
    return textArray.map((item, index) => {
      return item.children.map((child, childIndex) => {
        // Check if the text should be bold
        if (child.bold) {
          return <strong key={childIndex}>{child.text}</strong>;
        }
        return <span key={childIndex}>{child.text}</span>;
      });
    });
  };

  return (
    <div>
      <Header />
      {data && (
        <>
          <h1
            style={{
              color: "#32CD32",
              fontSize: "3rem",
              textAlign: "center",
              margin: "20px 0",
            }}
          >
            {data.Title}
          </h1>

          <p style={{ textAlign: "center", fontSize: "1.25rem" }}>
            {data.Description.map((desc, index) => (
              <span key={index}>
                {desc.children[0].text}
                <br />
              </span>
            ))}
          </p>

          <RoomsGrid />

          <br />
          <hr />
          <div style={{ textAlign: "center" }}>
            {data.HireRules.map((rule, index) => (
              <p key={index}>
                {renderTextWithFormatting([rule])}
              </p>
            ))}
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

export default Community;
