import React from 'react';
import CardItem from '../Components/CardItem'
import { dogs } from '../Components/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const DogAdoption = () => {
  return (
    <div>

      <div className='CardStyle'>

      {dogs.map((dog, index) => (
          <div  key={index}>
            <CardItem dog={dog} />
          </div>
        ))}
      </div>

      </div>

  );
};

export default DogAdoption;
