import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import possumImg from "../assets/possum.png";
import koalaImg from "../assets/koala.png";
import childrenPlayingImg from "../assets/children_playing.png";
import cartoonChildrenImg from "../assets/cartoon_children.png";
import './styles/Grid.css'; // Import the updated CSS file

const FormsEmailLink = "/formsEmail";

function Grid() {
  const cardData = [
    {
      imgSrc: possumImg,
      title: "Community Childcare - Possum Group",
      text: "We provide engaging early learning experiences for children from 6 weeks to 4 years old.",
    },
    {
      imgSrc: koalaImg,
      title: "Community Childcare - Koala Group",
      text: "Our 3+ year old Koala group delivers structured educational sessions through play-based activities.",
    },
    {
      imgSrc: childrenPlayingImg,
      title: "Outside School Hours Care",
      text: "Staying late at work? We have before and after school care for school-aged children.",
    },
    {
      imgSrc: cartoonChildrenImg,
      title: "Children Activities",
      text: "Take a look at our great children activities! Children's Drama Academy and Mini Maestros.",
    },
  ];

  return (
    <div className="grid-container">
      <Row xs={1} md={1} className="g-4 row-align-center">
        {cardData.map((card, idx) => (
          <Col key={idx}>
            <Row className="align-items-center justify-content-center">
              {idx % 2 === 0 ? (
                <>
                  <Col md={6}>
                    <Card.Img
                      variant="top"
                      src={card.imgSrc}
                      alt={card.title}
                      className="img-fluid card-img"
                    />
                  </Col>
                  <Col md={6}>
                    <Card.Body>
                      <Card.Title className="card-title">
                        {card.title}
                      </Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                      <Link to={FormsEmailLink}>
                        <Button className="card-button">Read More</Button>
                      </Link>
                    </Card.Body>
                  </Col>
                </>
              ) : (
                <>
                  <Col md={6} className="order-md-2">
                    <Card.Img
                      variant="top"
                      src={card.imgSrc}
                      alt={card.title}
                      className="img-fluid card-img"
                    />
                  </Col>
                  <Col md={6} className="order-md-1">
                    <Card.Body>
                      <Card.Title className="card-title">
                        {card.title}
                      </Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                      <Link to="/forms">
                        <Button className="card-button">Read More</Button>
                      </Link>
                    </Card.Body>
                  </Col>
                </>
              )}
            </Row>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Grid;
