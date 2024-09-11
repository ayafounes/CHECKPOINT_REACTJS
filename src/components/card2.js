import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card2Comp() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Python</Card.Title>
        <Card.Text>
        Python is a versatile, high-level programming language known for its simplicity and readability. Designed with an emphasis on code clarity, it uses indentation to define code structure, making it accessible to both beginners and experienced developers.With its extensive standard library and a vibrant ecosystem of third-party packages, Python is widely used in fields such as web development, ...
        </Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
  );
}

export default Card2Comp;