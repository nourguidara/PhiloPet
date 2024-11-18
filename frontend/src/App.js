
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import DogAdoption from './Pages/DogAdoption';
import CatAdoption from './Pages/CatAdoption';
import GivePet from './Pages/GivePet';
import Wishlist from './Pages/Wishlist';

import NavigationBar from './Components/NavigationBar';
import { WishlistProvider } from './Components/WishlistContext';



function App() {
  return (
    <WishlistProvider>
    <BrowserRouter>
    <NavigationBar />
    <Routes>

    <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/dog-adoption" element={<DogAdoption />} />
        <Route path="/cat-adoption" element={<CatAdoption />} />
        <Route path="/give-pet" element={<GivePet />} />
        <Route path="/wishlist" element={<Wishlist />} />
        
        
    </Routes>
    </BrowserRouter>
    </WishlistProvider>
    
  );
}

export default App;
