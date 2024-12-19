import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardItem from '../Components/CardItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const CatAdoption = () => {

  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [breeds, setBreeds] = useState([]);  // Store unique breeds
  const [selectedBreed, setSelectedBreed] = useState(''); // Track selected breed

  // Fetch cats and filter them by breed
  const fetchCats = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/pets'); // Fetch all pets
      const filteredCats = response.data.pets.filter((pet) => pet.species === 'cat'); // Filter cats
      setCats(filteredCats);
      setFilteredCats(filteredCats); // Initially, all cats are displayed

      // Extract unique breeds from the fetched cat data
      const uniqueBreeds = [...new Set(filteredCats.map((cat) => cat.breed))];
      setBreeds(uniqueBreeds); // Set unique breed options
    } catch (error) {
      console.error('Error fetching cats:', error);
    }
  };

  // Filter cats by selected breed
  const handleBreedChange = (e) => {
    const selectedBreed = e.target.value;
    setSelectedBreed(selectedBreed);

    // Filter cats based on selected breed
    const filtered = selectedBreed
      ? cats.filter((cat) => cat.breed === selectedBreed)
      : cats;

    setFilteredCats(filtered); // Update displayed cats
  };

  useEffect(() => {
    fetchCats();
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
        {filteredCats.map((cat) => (
          <CardItem 
            key={cat.id} 
            pet={cat} 
            type="cat" 
            createdAt={cat.createdAt} 
          />
        ))}
      </div>
    </div>
  );
};

export default CatAdoption;
