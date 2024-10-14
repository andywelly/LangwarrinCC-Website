import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import orchidImg from "../assets/orchidSociety.jpg";
import buildingImg from "../assets/Building.jpg";
import foodBankImg from "../assets/foodBank.png";
import roomImg from "../assets/rooms/mainRoom.png";

import './styles/Grid.css'; // Import the updated CSS file

const ServicesFormsLink = "/serviceForms";

function Grid() {
  const cardData = [
    {
      imgSrc: orchidImg,
      title: "Community Groups - Mornington Peninsula Orchid Society",
      text: "New members are always welcome. Starts: Every third Friday (except December). Time:  7.00 pm - 10.00 pm",
    },
    {
      imgSrc: foodBankImg,
      title: "Community Support - Food Bank Donations",
      text: "Please help us give to those in need of extra assistance and doing it tough with the cost of living pressures. We accept donations of food (canned, dried, long life items etc and personal care items here at the Community Centre)",
    },
    {
      imgSrc: buildingImg,
      title: "Community Events",
      text: "Construction at Langwarrin Community Centre is expected to commence in October 2024.  It will be business as usual at the Centre with some slight disruption!  There will be some room changes while construction takes place.",
    },
    {
      imgSrc: roomImg,
      title: "Community Services - Room Hire",
      text: "Phone the Centre on 9789 7653, or send us an email for more details"
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
                      <Link to={ServicesFormsLink}>
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
                      <Link to={ServicesFormsLink}>
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
