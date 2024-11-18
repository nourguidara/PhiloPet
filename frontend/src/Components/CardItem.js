import React, {useState} from 'react';
import { Card, Badge, Row, Col, Button, Carousel } from 'react-bootstrap';
import { FaPaw, FaBaby, FaDog, FaCat, FaCheck, FaTimes, FaShareAlt, FaHeart, FaBroom } from 'react-icons/fa';
import './CardItem.css';
import { useWishlist } from './WishlistContext';

const CardItem = ({ pet, type }) => {

  // const [isLiked, setIsLiked] = useState(false)

  // const handleClick = ()=>{
  //   setIsLiked(!isLiked);
  // };
  const { wishlist, toggleWishlist } = useWishlist();
  const isLiked = wishlist.some((item) => item.name === pet.name);

  const handleClick = () => {
    toggleWishlist(pet);
  };
  
  return (
    <Card className="pet-card mb-4 shadow-sm">
      <Carousel className="pet-carousel">
        {pet.images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100 pet-image" src={image} alt={`${pet.name} - ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body>
        <Badge bg="secondary" className="mb-2">New</Badge>
        <Card.Title>{pet.name}</Card.Title>
        <Card.Subtitle>{pet.breed}</Card.Subtitle>
        <Card.Text >
          <small>Location: {pet.location}</small>
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
           
            <Button variant="light" onClick={handleClick}>
            <FaHeart style={{ color: isLiked ? 'red' : 'black' }} />
            </Button>
          </div>
          <small className="text-muted">Ad posted {pet.posted}</small>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
