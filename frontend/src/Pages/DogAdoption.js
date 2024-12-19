
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardItem from '../Components/CardItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const DogAdoption = () => {


  const [dogs, setDogs] = useState([]);
  const [filteredDogs, setFilteredDogs] = useState([]);
  const [breeds, setBreeds] = useState([]);  // Store unique breeds
  const [selectedBreed, setSelectedBreed] = useState(''); // Track selected breed

  // Fetch dogs and filter them by breed
  const fetchDogs = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/pets'); // Fetch all pets
      const filteredDogs = response.data.pets.filter((pet) => pet.species === 'dog'); // Filter dogs
      setDogs(filteredDogs);
      setFilteredDogs(filteredDogs); // Initially, all dogs are displayed

      // Extract unique breeds from the fetched dog data
      const uniqueBreeds = [...new Set(filteredDogs.map((dog) => dog.breed))];
      setBreeds(uniqueBreeds); // Set unique breed options
    } catch (error) {
      console.error('Error fetching dogs:', error);
    }
  };

  // Filter dogs by selected breed
  const handleBreedChange = (e) => {
    const selectedBreed = e.target.value;
    setSelectedBreed(selectedBreed);

    // Filter dogs based on selected breed
    const filtered = selectedBreed
      ? dogs.filter((dog) => dog.breed === selectedBreed)
      : dogs;

    setFilteredDogs(filtered); // Update displayed dogs
  };

  useEffect(() => {
    fetchDogs();
  }, []);

  return (
    <div>
      <div className="filter-section">
        <label htmlFor="breed-select">Filter by Breed:</label>
        <select 
          id="breed-select" 
          value={selectedBreed} 
          onChange={handleBreedChange}
        >
          <option value="">All Breeds</option>
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>

      <div className="CardStyle">
        {filteredDogs.map((dog) => (
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

