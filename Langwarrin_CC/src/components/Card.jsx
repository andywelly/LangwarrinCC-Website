import Card from 'react-bootstrap/Card';

function HomeCard() {
  return (
    <Card>
      <Card.Header>TestCard</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
          Lifelong Learning and Community Participation for Everyone
          </p>
          <footer className="blockquote-footer">
            Langwarrin Community Centre Motto
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default HomeCard;