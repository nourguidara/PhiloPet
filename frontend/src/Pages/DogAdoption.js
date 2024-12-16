import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CardItem from '../Components/CardItem'
// import { dogs } from '../Components/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const DogAdoption = () => {

  const [dogs, setDogs] = useState([]);

  const fetchDogs = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/dogs');
      setDogs(response.data.dogs || []); // Ensure data structure matches backend response
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
          
            <CardItem key={dog._id} pet={dog} type="dog" createdAt={dog.createdAt} />
          
        ))}
      </div>

      </div>

  );
};

export default DogAdoption;
