import React, {useState} from 'react';
import { Card, Badge, Row, Col, Button, Carousel, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FaPaw, FaBaby, FaDog, FaCat, FaHeart, FaBroom } from 'react-icons/fa';
import './CardItem.css';
import { useWishlist } from './WishlistContext';
import { useNavigate } from 'react-router-dom';

const CardItem = ({ pet, type,createdAt }) => {

  const navigate = useNavigate();
  const { wishlist, toggleWishlist } = useWishlist();
  const isLiked = wishlist.some((item) => item.id === pet.id); // Use `id` to check

  const handleClick = (e) => {
    e.stopPropagation();
    toggleWishlist(pet);
  };

  const handleCardClick = () => {
    navigate(`/pet-details/${pet.id}`);
  };

  const isNew = () => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const timeDifference = now - createdDate;
    return timeDifference <= 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  };

  const iconMapping = {
    'Can live with other dogs': <FaDog />,
    'Can live with other cats': <FaCat />,
    'Friendly with children and babies': <FaBaby />,
    'Microchipped': <FaPaw />,
    'House-trained': <FaBroom />,
  };
  
  return (
    <Card className="pet-card mb-4 shadow-sm" onClick={handleCardClick} >
      <Carousel className="pet-carousel">
        {pet.images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100 pet-image" src={image} alt={`${pet.name} - ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body>
      {isNew() && <Badge bg="secondary" className="mb-2">New</Badge>}
        <Card.Title>{pet.name}</Card.Title>
        <Card.Subtitle>{pet.breed}</Card.Subtitle>
        <Card.Text >
          <small>Location: {pet.location}</small>
        </Card.Text>
        <Row className="icons-row mb-3">
          {pet.features &&
            pet.features.map((description, index) => (
              <Col key={index}>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>{description}</Tooltip>}
                >
                  <div className="icon-container">{iconMapping[description]}</div>
                </OverlayTrigger>
              </Col>
            ))}
        </Row>

        <div className="d-flex justify-content-between align-items-center">
          <div>
           
            <Button variant="light" onClick={handleClick}>
            <FaHeart style={{ color: isLiked ? '#b68147' : 'black' }} />
            </Button>
          </div>
          <small className="text-muted">posted on {pet.posted}</small>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
