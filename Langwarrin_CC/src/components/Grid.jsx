import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { API_URL } from "../constants"; // Make sure API_URL is correctly set
import './styles/Grid.css'; // Import the updated CSS file

const ChildcareFormsLink = "/childcareForms";

function Grid() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await axios.get(`${API_URL}/childcare?populate=deep`);
        const cards = response.data.data.attributes.Card; // Adjust this to match the API response structure
        setCardData(cards);
      } catch (error) {
        console.error('Error fetching childcare cards:', error);
      }
    };
    fetchCardData();
  }, []);

  if (!cardData || cardData.length === 0) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  return (
    <div className="grid-container">
      <Row xs={1} md={1} className="g-4 row-align-center">
        {cardData.map((card, idx) => {
          // Get the URL if it exists in the image data
          const imageUrl = card.Image?.data?.[0]?.attributes?.url || '';

          return (
            <Col key={idx}>
              <Row className="align-items-center justify-content-center">
                {idx % 2 === 0 ? (
                  <>
                    <Col md={6}>
                      {imageUrl && (
                        <Card.Img
                          variant="top"
                          src={imageUrl}
                          alt={card.Title}
                          className="img-fluid card-img"
                        />
                      )}
                    </Col>
                    <Col md={6}>
                      <Card.Body>
                        <Card.Title className="card-title">
                          {card.Title}
                        </Card.Title>
                        <Card.Text>
                          {card.Description
                            ? card.Description.split('\n').map((line, index) => (
                                <span key={index}>
                                  {line}
                                  <br />
                                </span>
                              ))
                            : null}
                        </Card.Text>
                        <Link to={ChildcareFormsLink}>
                          <Button className="card-button">Book Now</Button>
                        </Link>
                      </Card.Body>
                    </Col>
                  </>
                ) : (
                  <>
                    <Col md={6} className="order-md-2">
                      {imageUrl && (
                        <Card.Img
                          variant="top"
                          src={imageUrl}
                          alt={card.Title}
                          className="img-fluid card-img"
                        />
                      )}
                    </Col>
                    <Col md={6} className="order-md-1">
                      <Card.Body>
                        <Card.Title className="card-title">
                          {card.Title}
                        </Card.Title>
                        <Card.Text>
                          {card.Description
                            ? card.Description.split('\n').map((line, index) => (
                                <span key={index}>
                                  {line}
                                  <br />
                                </span>
                              ))
                            : null}
                        </Card.Text>                        <Link to={ChildcareFormsLink}>
                          <Button className="card-button">Book Now</Button>
                        </Link>
                      </Card.Body>
                    </Col>
                  </>
                )}
              </Row>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Grid;
