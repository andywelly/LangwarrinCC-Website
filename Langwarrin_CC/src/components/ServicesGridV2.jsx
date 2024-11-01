import React, { useEffect, useState } from 'react';
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from 'axios';
import './styles/Grid.css';

import { API_URL } from "../constants"; // Make sure API_URL is correctly set

function ServicesGridV2() {
    const [serviceGroups, setServiceGroups] = useState([]);

    useEffect(() => {
        const fetchCardData = async () => {
            try {
                const response = await axios.get(`${API_URL}/service?populate=deep`);
                const groups = response.data.data.attributes.ServiceGroup; // Access the ServiceGroup attribute
                setServiceGroups(groups);
            } catch (error) {
                console.error('Error fetching service groups:', error);
            }
        };

        fetchCardData();
    }, []);

    if (!serviceGroups || serviceGroups.length === 0) {
        return <div>Loading...</div>; // Show loading state while fetching data
    }

    return (
        <div style={{ width: '80%', margin: '0 auto' }}>
            {serviceGroups.map((group) => (
                <Row key={group.id} className="main-category" style={{ marginBottom: '30px' }}>
                    <article><center>{group.Heading}</center></article>
                    <div className="grid-container">
                        <Row xs={1} md={3} className="justify-content-md-center">
                            {group.ServiceCard.map((card) => (
                                <Col key={card.id}>
                                    <Row className="align-items-center justify-content-md-center">
                                        <Col md={10} className="courseCard">
                                            <Container>
                                                <Row>
                                                    <Card.Img
                                                        variant="top"
                                                        src={card.Image.data[0].attributes.url} // Access the image URL
                                                        alt={card.Title}
                                                        className="img-fluid card-img"
                                                    />
                                                </Row>
                                                <Row>
                                                    <div className="title">{card.Title}</div>
                                                </Row>
                                                <Row>
                                                    <Card.Body>
                                                        <p>{card.Description}</p> {/* Use Description instead of text */}
                                                        <Link to="/computer">
                                                            <Button className="card-button">Book Now</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Row>
                                            </Container>
                                        </Col>
                                    </Row>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Row>
            ))}
        </div>
    );
}

export default ServicesGridV2;
