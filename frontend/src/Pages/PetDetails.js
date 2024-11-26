import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import { dogs, cats } from '../Components/data'; // Import your pet data arrays

const PetDetails = () => {
  const { id } = useParams();

  // Find the pet in both `dogs` and `cats` arrays
  const pet = dogs.find((item) => item.id === id) || cats.find((item) => item.id === id);

  if (!pet) {
    return <p>Pet not found!</p>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">{pet.name}</h1>
      <Row>
        {/* Left Column: Images */}
        <Col md={6}>
          <img
            src={pet.images[0]}
            alt={pet.name}
            className="img-fluid rounded shadow-sm mb-3"
          />
          <Row>
            {pet.images.slice(1).map((image, index) => (
              <Col key={index} xs={4}>
                <img
                  src={image}
                  alt={`${pet.name} - ${index + 2}`}
                  className="img-fluid rounded shadow-sm"
                />
              </Col>
            ))}
          </Row>
        </Col>

        {/* Right Column: Pet Details */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Details</Card.Title>
              <Card.Text>
                <strong>Breed:</strong> {pet.breed}
              </Card.Text>
              <Card.Text>
                <strong>Location:</strong> {pet.location}
              </Card.Text>
              <Card.Text>
                <strong>Description:</strong> {pet.description || 'No description available.'}
              </Card.Text>
              <Card.Text>
                <strong>Animal Fee:</strong> {pet.animalFee || 'Not specified'}
              </Card.Text>
              <Card.Text>
                <strong>Additional Details:</strong>
                <ul>
                  <li>Sex: {pet.additionalDetails?.sex || 'Not specified'}</li>
                  <li>Age: {pet.additionalDetails?.age || 'Not specified'}</li>
                  <li>Breed: {pet.additionalDetails?.breed || pet.breed}</li>
                </ul>
              </Card.Text>
              <Card.Text>
                <strong>Features:</strong>
                <ul>
                  {pet.features
                    ? pet.features.map((feature, index) => <li key={index}>{feature}</li>)
                    : <li>No features available</li>}
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PetDetails;
