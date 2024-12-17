// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import CardItem from '../Components/CardItem'; // Import the CardItem component
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../App.css';

// const PetAdoption = () => {
//   const [pets, setPets] = useState([]); // Changed variable name to 'pets' for both dogs and cats

//   const fetchPets = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/api/pets'); // Updated API endpoint to '/pets'
//       setPets(response.data.pets || []); // Ensure data structure matches backend response
//     } catch (error) {
//       console.error('Error fetching pets:', error);
//     }
//   };

//   useEffect(() => {
//     fetchPets();
//   }, []);

//   return (
//     <div>
//       <div className='CardStyle'>
//         {pets.map((pet) => (
//           <CardItem 
//             key={pet.id} 
//             pet={pet} 
//             type={pet.species}  // Dynamically set 'dog' or 'cat' based on pet's species
//             createdAt={pet.createdAt} 
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PetAdoption;
