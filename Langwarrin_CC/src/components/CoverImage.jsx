import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "react-bootstrap/Image";
import "./styles/CoverImage.css"; // Make sure to import the CSS file
import { API_URL, BASE_URL} from "../constants";

function CoverImage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/home?populate=deep`, {
        });
        console.log(response.data); // Log the whole response
        const data = response.data.data.attributes.Header; 
        setData(data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return <div></div>; // Show a loading message while data is being fetched
  }

  return (
    <div className="cover-image-container">
      <Image 
        src={`${data.Image.data.attributes.url}`} 
        fluid 
        className="cover-image" 
      />
      <div className="cover-text">{data.ImageText}</div>
    </div>
  );
}

export default CoverImage;
