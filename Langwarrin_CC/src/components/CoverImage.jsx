import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "react-bootstrap/Image";
import "./styles/CoverImage.css"; // Make sure to import the CSS file
import { API_URL, BASE_URL} from "../constants";

function CoverImage() {
  const [headerData, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/home?populate=deep`, {
        });
        console.log(response.data); // Log the whole response
        const data = response.data.data.attributes.Header; 
        setData(data);
      } catch (error) {
          console.error('Error fetching footer data:', error);
      }
    };
    fetchData();
  }, []);

  if (!headerData) {
    return <div>Loading...</div>; // Show a loading message while data is being fetched
  }

  //return <div>{JSON.stringify(headerData, null, 2)}</div>;
  return (
    <div className="cover-image-container">
      <Image 
        src={`${BASE_URL}${headerData.Image.data.attributes.url}`} 
        fluid 
        className="cover-image" 
      />
      <div className="cover-text">{headerData.ImageText}</div>
    </div>
  );
}

export default CoverImage;


// import Image from "react-bootstrap/Image";
// import Imagesrc from "../assets/Background.jpg";
// import "./styles/CoverImage.css"; // Make sure to import the CSS file

// function CoverImage() {
//   return (
//     <div className="cover-image-container">
//       <Image src={Imagesrc} fluid className="cover-image" />
//       <div className="cover-text">Langwarrin Community Centre</div>
//     </div>
//   );
// }

// export default CoverImage;
