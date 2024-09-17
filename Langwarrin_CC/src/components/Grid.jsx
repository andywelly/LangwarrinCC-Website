import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import possumImg from "../assets/possum.png";
import koalaImg from "../assets/koala.png";
import childrenPlayingImg from "../assets/children_playing.png";
import cartoonChildrenImg from "../assets/cartoon_children.png";

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
    <Row xs={1} md={1} className="g-4">
      {cardData.map((card, idx) => (
        <Col key={idx}>
          <Row className="align-items-center">
            {idx % 2 === 0 ? (
              <>
                <Col md={6}>
                  <Card.Img
                    variant="top"
                    src={card.imgSrc}
                    alt={card.title}
                    className="img-fluid"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Col>
                <Col md={6}>
                  <Card.Body>
                    <Card.Title style={{ color: "#32CD32" }}>
                      {card.title}
                    </Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                    <Link to="/forms">
                      <Button
                        variant="success"
                        style={{
                          backgroundColor: "#3cb371",
                          borderColor: "#3cb371",
                        }}
                      >
                        Read More
                      </Button>
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
                    className="img-fluid"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Col>
                <Col md={6} className="order-md-1">
                  <Card.Body>
                    <Card.Title style={{ color: "#32CD32" }}>
                      {card.title}
                    </Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                    <Link to="/forms">
                      <Button
                        variant="success"
                        style={{
                          backgroundColor: "#3cb371",
                          borderColor: "#3cb371",
                        }}
                      >
                        Read More
                      </Button>
                    </Link>
                  </Card.Body>
                </Col>
              </>
            )}
          </Row>
        </Col>
      ))}
    </Row>
  );
}

export default Grid;
