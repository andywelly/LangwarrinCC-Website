import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Nav from 'react-bootstrap/Nav';
import CardImage from '../assets/Building.jpg';
import Button from 'react-bootstrap/Button';
import './styles/HomeCards.css';

function HomeCards() {
  return (
    <div className='homecards-container'>
      <CardGroup>
        <Card className='card-text-card'>
          <Card.Body>
            <Card.Text className='card-text'>
              Early in May 1982, what was the old school house at 13 Warrandyte Road, became the new Langwarrin Living & Learning Centre Inc. 
              The Progress Association had worked hard at establishing this Centre, which was intended to be a place for community activities, 
              for meetings, for classes, for clubs, for organising a base for Langwarrin people.
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