import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import mainRoom from "../assets/rooms/mainRoom.png";
import craigRoom from "../assets/rooms/craigRoom.png";
import hempelRoom from "../assets/rooms/hempelRoom.png";
import hamptonRoom from "../assets/rooms/hamptonRoom.png";
import backSpareOffice from "../assets/rooms/backSpareOffice.png";

import './styles/Grid.css'; // Import the updated CSS file


const BookingFormsLink = "/bookingForms";

function RoomsGrid() {
  const cardData = [
    {
      imgSrc: mainRoom,
      title: "Hall Full Area",
      text: (
        <>
          <p>Casual Hirers: $50.00</p>
          <p>Permanent Hirers (non-community groups): $35.00</p>
          <p>Community Group: $25.00</p>
          <p>Capacity: 100 people</p>
        </>
      )
    },
    {
      imgSrc: craigRoom,
      title: "Craig Room",
      text: (
        <>
          <p>Casual Hirers: $30.00</p>
          <p>Permanent Hirers (non-community groups): $23.00</p>
          <p>Community Group: $15.00</p>
          <p>Capacity: 20 people</p>
        </>
      )
    },
    {
      imgSrc: hempelRoom,
      title: "Hempel Room",
      text: (
        <>
          <p>Casual Hirers: $30.00</p>
          <p>Permanent Hirers (non-community groups): $23.00</p>
          <p>Community Group: $15.00</p>
          <p>Capacity: 10 people</p>
        </>
      )
    },
    {
      imgSrc: hamptonRoom,
      title: "Hampton Room",
      text: (
        <>
          <p>Casual Hirers: $31.00</p>
          <p>Permanent Hirers (non-community groups): $28.00</p>
          <p>Community Group: $17.00</p>
          <p>Capacity: 25 people</p>
        </>
      )
    },
    {
      imgSrc: backSpareOffice,
      title: "Back Spare Office",
      text: (
        <>
          <p>Casual Hirers: $25.00</p>
          <p>Permanent Hirers (non-community groups): $19.00</p>
          <p>Community Group: $17.00</p>
          <p>Capacity: 6 people</p>
        </>
      )
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
                      <Link to={BookingFormsLink}>
                        <Button className="card-button">Hire Now</Button>
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
                      <Link to={BookingFormsLink}>
                        <Button className="card-button">Hire Now</Button>
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

export default RoomsGrid;
