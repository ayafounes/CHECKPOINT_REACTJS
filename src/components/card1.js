import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card1Comp() {
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Javascript</Card.Title>
        <Card.Text>
            JavaScript is a programming language used to make web pages interactive by manipulating content and events. It allows for creating animations, managing user interactions, and updating content in real time without reloading the page. In addition to front-end development, JavaScript is also used on the server side with technologies such as Node.js .Additionally, JavaScript is known ...
        </Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
  );
}

export default Card1Comp;