import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL, BASE_URL} from "../constants";
import Carousel from 'react-bootstrap/Carousel';
import './styles/Carousel.css';

function HomeCarousel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/home?populate=deep`, {
        });
        console.log(response.data); // Log the whole response
        const data = response.data.data.attributes.CarouselImage; 
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
    <div className="carousel-container">
      <Carousel>
        {data.map((item, index) => (
          <Carousel.Item key={item.id}>
            <img
              className="carousel-image"
              src={`${BASE_URL}${item.Image.data.attributes.url}`} // Adjust URL as needed
              alt={item.Caption} // Use Caption as alt text
            />
            <Carousel.Caption>
              <p className="carousel-caption-text">
                {item.Caption} {/* Display the caption from the API */}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default HomeCarousel;


// function HomeCarousel() {
//   return (
//     <div className="carousel-container">
//       <Carousel>
//         <Carousel.Item>
//           <img
//             className="carousel-image"
//             src={Image1}
//             alt="Thrive"
//           />
//           <Carousel.Caption>
//             <p className="carousel-caption-text">
//               Langwarrin Community Centre is a proud partner of the THRIVE network!
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="carousel-image"
//             src={Image2}
//             alt="Exercise"
//           />
//           <Carousel.Caption>
//             <p className="carousel-caption-text">Gentle Exercise for all ages</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="carousel-image"
//             src={Image3}
//             alt="Stillness"
//           />
//           <Carousel.Caption>
//             <p className="carousel-caption-text">
//               A time to gather for reflection, stillness, sharing, respect and care!
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="carousel-image"
//             src={Image4}
//             alt="Seniors"
//           />
//           <Carousel.Caption>
//             <p className="carousel-caption-text">
//               Seniors Night at LLC!
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// }

// export default HomeCarousel;
