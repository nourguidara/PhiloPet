import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardItem from '../Components/CardItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const DogAdoption = () => {
  const [dogs, setDogs] = useState([]);

  const fetchDogs = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/pets'); // Fetch all pets
      const filteredDogs = response.data.pets.filter((pet) => pet.species === 'dog'); // Filter dogs
      setDogs(filteredDogs);
    } catch (error) {
      console.error('Error fetching dogs:', error);
    }
  };

  useEffect(() => {
    fetchDogs();
  }, []);

  return (
    <div>
     
      <div className='CardStyle'>
        {dogs.map((dog) => (
          <CardItem 
            key={dog.id} 
            pet={dog} 
            type="dog" 
            createdAt={dog.createdAt} 
          />
        ))}
      </div>
    </div>
  );
};

export default DogAdoption;
