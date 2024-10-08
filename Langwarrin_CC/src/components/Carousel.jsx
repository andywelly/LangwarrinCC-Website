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

