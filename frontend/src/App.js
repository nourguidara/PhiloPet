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
import AdminDashboard from './Components/AdminDashboard';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    
      <WishlistProvider>
        <BrowserRouter>
        <NavigationBar />

        <Routes>

      <Route path="/" element={<HomePage />} />
      <Route
          path="/shop"
          element={
            <ProtectedRoute>
              <Shop />
            </ProtectedRoute>
          }
        />
          <Route path="/dog-adoption" element={<ProtectedRoute><DogAdoption /></ProtectedRoute>} />
          <Route path="/cat-adoption" element={<ProtectedRoute><CatAdoption /></ProtectedRoute>} />
          
          <Route path="/give-pet" element={<ProtectedRoute><GivePet /></ProtectedRoute>} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/pet-details/:id" element={<PetDetails />} />

          <Route path="/articles" element={<ArticlePage />} />
          <Route path="/tips" element={<TipsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route 
  path="/admindashboard" 
  element={<AdminDashboard />} 
/>



        
      </Routes>
      <FooterNav />
        </BrowserRouter>
      </WishlistProvider>
   
  );
}



export default App;
