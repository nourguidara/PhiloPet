
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DogAdoption from './Components/DogAdoption';
import CatAdoption from './Components/CatAdoption';
import Home from './Components/Home';
import GivePet from './Components/GivePet';
import NavigationBar from './Components/NavigationBar';
import Shop from './Components/shop';


function App() {
  return (

    <BrowserRouter>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/dog-adoption" element={<DogAdoption />} />
      <Route path="/cat-adoption" element={<CatAdoption />} />
      <Route path="/give-pet" element={<GivePet />} />
    </Routes>
    </BrowserRouter>

    
  );
}

export default App;
