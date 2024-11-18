import React from 'react';
import CardItem from '../Components/CardItem';
import { cats } from '../Components/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const CatAdoption = () => {
  return (
    <div>
      <div className='CardStyle'>
      {cats.map((cat, index) => (
        <CardItem key={index} pet={cat} type="cat" />
      ))}
    </div>
    </div>
  );
};

export default CatAdoption;
