import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { API_URL } from "../constants"; // Ensure API_URL is correctly set
const BookingFormsLink = "/bookingForms";

function RoomsGrid() {
  const [roomsData, setRoomsData] = useState([]);

  useEffect(() => {
    const fetchRoomsData = async () => {
      try {
        const response = await axios.get(`${API_URL}/room-hire?populate=deep`);
        const rooms = response.data.data.attributes.Room; // Adjust to match the API structure
        setRoomsData(rooms);
      } catch (error) {
        console.error("Error fetching rooms data:", error);
      }
    };
    fetchRoomsData();
  }, []);

  if (!roomsData || roomsData.length === 0) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <div className="grid-container">
      <Row xs={1} md={1} className="g-4 row-align-center">
        {roomsData.map((room, idx) => (
          <Col key={idx}>
            <Row className="align-items-center justify-content-center">
              {idx % 2 === 0 ? (
                <>
                  <Col md={6}>
                    <Card.Img
                      variant="top"
                      src={room.Image.data[0].attributes.url} // Fetch image URL
                      alt={room.RoomName}
                      className="img-fluid card-img"
                    />
                  </Col>
                  <Col md={6}>
                    <Card.Body>
                      <Card.Title className="card-title">
                        {room.RoomName}
                      </Card.Title>
                      <Card.Text>
                        <p>Casual Hirers: {room.CasualHire}</p>
                        <p>Permanent Hirers (non-community groups): {room.PermHire}</p>
                        <p>Community Group: {room.CommGroups}</p>
                        <p>Capacity: {room.Capacity}</p>
                      </Card.Text>
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
                      src={room.Image.data[0].attributes.url} // Fetch image URL
                      alt={room.RoomName}
                      className="img-fluid card-img"
                    />
                  </Col>
                  <Col md={6} className="order-md-1">
                    <Card.Body>
                      <Card.Title className="card-title">
                        {room.RoomName}
                      </Card.Title>
                      <Card.Text>
                        <p>Casual Hirers: {room.CasualHire}</p>
                        <p>Permanent Hirers (non-community groups): {room.PermHire}</p>
                        <p>Community Group: {room.CommGroups}</p>
                        <p>Capacity: {room.Capacity}</p>
                      </Card.Text>
                      <Link to={BookingFormsLink}>                        <Button className="card-button">Hire Now</Button>
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
