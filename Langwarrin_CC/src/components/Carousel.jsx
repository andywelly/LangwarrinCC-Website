import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../assets/Thrive.png';
import Image2 from '../assets/Exercise.jpg';
import Image3 from '../assets/Stillness.png';
import Image4 from '../assets/Seniors.png'
import './styles/Carousel.css';

function HomeCarousel() {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="carousel-image"
            src={Image1}
            alt="Thrive"
          />
          <Carousel.Caption>
            <p className="carousel-caption-text">
              Langwarrin Community Centre is a proud partner of the THRIVE network!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src={Image2}
            alt="Exercise"
          />
          <Carousel.Caption>
            <p className="carousel-caption-text">Gentle Exercise for all ages</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src={Image3}
            alt="Stillness"
          />
          <Carousel.Caption>
            <p className="carousel-caption-text">
              A time to gather for reflection, stillness, sharing, respect and care!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src={Image4}
            alt="Seniors"
          />
          <Carousel.Caption>
            <p className="carousel-caption-text">
              Seniors Night at LLC!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomeCarousel;