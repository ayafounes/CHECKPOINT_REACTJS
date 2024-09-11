import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card3Comp() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Java</Card.Title>
        <Card.Text>
        Java is a widely-used, high-level programming language known for its portability, performance, and scalability. Java operates on the principle of "write once, run anywhere," meaning code written in Java can run on any platform that supports the Java Virtual Machine (JVM). It is an object-oriented language, which emphasizes modularity and reusability through classes and ...
        </Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
  );
}

export default Card3Comp;