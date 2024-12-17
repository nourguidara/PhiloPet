import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import Shop from './Pages/Shop';
import DogAdoption from './Pages/DogAdoption';
import CatAdoption from './Pages/CatAdoption';
// import PetAdoption from './Pages/PetAdoption';
import GivePet from './Pages/GivePet';
import HomePage from './Pages/HomePage';
import Wishlist from './Pages/Wishlist';
import PetDetails from './Pages/PetDetails';
import NavigationBar from './Components/NavigationBar';
import FooterNav from './Components/FooterNav';
import { WishlistProvider } from './Components/WishlistContext';
import AboutUsPage from './Pages/AboutUsPage';
import TipsPage from './Pages/TipsPage';
import ArticlePage from './Pages/ArticlePage';


function App() {
  return (
    
      <WishlistProvider>
        <BrowserRouter>
        <NavigationBar />

        <Routes>

      <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/dog-adoption" element={<DogAdoption />} />
          <Route path="/cat-adoption" element={<CatAdoption />} />
          
          <Route path="/give-pet" element={<GivePet />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/pet-details/:id" element={<PetDetails />} />

          <Route path="/articles" element={<ArticlePage />} />
          <Route path="/tips" element={<TipsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>


      <FooterNav />
        </BrowserRouter>
      </WishlistProvider>
   
  );
}



export default App;
