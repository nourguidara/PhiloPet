// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function CardItem() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default CardItem;

import React from 'react';
import { Card, Badge, Row, Col, Button } from 'react-bootstrap';
import { FaPaw, FaBaby, FaDog, FaCat, FaCheck, FaTimes, FaShareAlt, FaHeart, FaBroom } from 'react-icons/fa';
import './CardItem.css';


const CardItem = ({ dog }) => {
  return (
    <Card className="dog-card mb-4 shadow-sm">
      <Card.Img variant="top" src={dog.image} alt={dog.name} className="dog-image" />
      <Card.Body>
        <Badge bg="secondary" className="mb-2">New</Badge>
        <Card.Title>{dog.name}</Card.Title>
        <Card.Subtitle>{dog.breed}</Card.Subtitle>
        <Card.Text >
          <small>Location: {dog.location}</small>
        </Card.Text>
        <Row className="icons-row mb-3">
          <Col><FaDog className="icon" /></Col>
          <Col><FaCat className="icon" /></Col>
          <Col><FaBaby className="icon" /></Col>
          <Col><FaPaw className="icon" /></Col>
          <Col><FaBroom className="icon" /></Col>
        </Row>
        <div className="d-flex justify-content-between align-items-center">
          <div>
           
            <Button variant="light" ><FaHeart /></Button>
          </div>
          <small className="text-muted">Ad posted {dog.posted}</small>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
