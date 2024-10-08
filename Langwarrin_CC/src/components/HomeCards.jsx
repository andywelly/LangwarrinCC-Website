import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL, BASE_URL} from "../constants";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Nav from 'react-bootstrap/Nav';
import CardImage from '../assets/Building.jpg';
import Button from 'react-bootstrap/Button';
import './styles/HomeCards.css';

function HomeCards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/home?populate=deep`, {
        });
        console.log(response.data); // Log the whole response
        const data = response.data.data.attributes.HomeCard; 
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
    <div className='homecards-container'>
      <CardGroup>
        <Card className='card-text-card'>
          <Card.Body>
            <Card.Text className='card-text'>
              {data.Description}
            </Card.Text>
          </Card.Body>
          <Card.Footer className='card-footer'>
            <Button variant="secondary" size="lg">
              <Nav.Link href="/about" className='read-more-link'>Read More</Nav.Link>
            </Button>
  
          </Card.Footer>
        </Card>
        <Card className='card-image'>
          <Card.Img variant="top" src={CardImage} />
        </Card>
      </CardGroup>
    </div>
  );
}

export default HomeCards;