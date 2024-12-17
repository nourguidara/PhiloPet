// import React from 'react';
// import CardItem from '../Components/CardItem';
// import { cats } from '../Components/data';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../App.css';

// const CatAdoption = () => {
//   return (
//     <div>
//       <div className='CardStyle'>
//       {cats.map((cat, index) => (
//         <CardItem key={index} pet={cat} type="cat" />
//       ))}
//     </div>
//     </div>
//   );
// };

// export default CatAdoption;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardItem from '../Components/CardItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const CatAdoption = () => {
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/pets'); // Fetch all pets
      const filteredCats = response.data.pets.filter((pet) => pet.species === 'cat'); // Filter cats
      setCats(filteredCats);
    } catch (error) {
      console.error('Error fetching cats:', error);
    }
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div>
      
      <div className='CardStyle'>
        {cats.map((cat) => (
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

