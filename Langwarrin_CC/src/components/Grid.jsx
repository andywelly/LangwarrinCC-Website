import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

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
      text: "Take a look at our great children activities! Children's Drama Academy and Mini Maestros",
    },
  ];

  return (
    <Row xs={1} md={2} className="g-4">
      c
      {cardData.map((card, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img
              variant="top"
              src={card.imgSrc}
              alt={card.title}
              style={{ maxWidth: "50%", height: "auto" }}
            />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
              <Button
                variant="primary"
                onClick={() => handleReadMore(cardData.title)}
              >
                Read More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Grid;
