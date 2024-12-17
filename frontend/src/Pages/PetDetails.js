import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

import axios from 'axios';
import './PetDetails.css';
const PetDetails = () => {
  const { id } = useParams();
  console.log("Pet ID:", id);
  const [pet, setPet] = useState(null);

  

  // Fetch the pet details from the backend
  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/pets/${id}`);
        console.log("Fetched pet details:", response.data);
        setPet(response.data.pet); // Set the fetched pet data
      } catch (err) {
        console.error("Error fetching pet details:", err);
        setPet(null); // If there's an error, set pet to null
      }
    };

    fetchPetDetails();
  }, [id]);

  if (!pet) {
    return <p>Loading pet details...</p>; 
  }

  return (
    <div className="container mt-5">
      <h1>{pet.name}</h1>

      <Row >
        {/* Left Column: Images */}
        <Col md={7}>
        <img
            src={`http://localhost:8000/${pet.images[0].replace(/\\/g, "/")}`}
            alt={pet.name}
            className="img-fluid rounded shadow-sm mb-3"
          />
          <Row>
            {pet.images.slice(1).map((image, index) => (
              <Col key={index} xs={4}>
                <img
                  src={`http://localhost:8000/${image.replace(/\\/g, "/")}`}
                  alt={`${pet.name} - ${index + 2}`}
                  className="img-fluid rounded shadow-sm"
                />
              </Col>
            ))}
          </Row>
        </Col>

        {/* Right Column: Pet Details */}
        <Col md={4}>
          <Card className="details shadow-sm">
            <Card.Body>
              <Card.Title>
                <span className="title">Details</span>
              </Card.Title>
              <Card.Text>
                <strong>Breed:</strong> {pet.breed}
              </Card.Text>
              <Card.Text>
                <strong>Location:</strong> {pet.location}
              </Card.Text>
              <Card.Text>
                <strong>Description:</strong> {pet.description }
              </Card.Text>
              <Card.Text>
                <strong>Animal Fee:</strong> {pet.fees==0 ? pet.fees="free":pet.fees}
              </Card.Text>
              <Card.Text>
                <strong>Additional Details:</strong>
                <ul>
                  <li>Sex: {pet.sex}</li>
                  <li>Age: {pet.age }</li>
                  <li>Breed: {pet.breed}</li>
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

              <Card.Text>
                <strong>Contact Information:</strong>
                <ul>
                  <li>Phone: {pet.contact || 'Not specified'}</li>
                  
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