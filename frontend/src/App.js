
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';

import DogAdoption from './Pages/DogAdoption';
import CatAdoption from './Pages/CatAdoption';
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
import AdminDashboard from './Pages/AdminDashboard';
import AccessoriesList from './Components/AccessoriesList';
import AccessoriesListDog from './Components/AccessoriesListDog';
import NutritionList from './Components/NutritionList';
import NutritionListDog from './Components/NutritionListDog';

import ProtectedRoute from './Components/ProtectedRoute';


function App() {
 

  return (
    <WishlistProvider>
      <BrowserRouter>
       
        <NavigationBar/>
        <Routes>
        
          <Route path="/" element={<HomePage />} /> 

          <Route path="/login" element={<LoginPage  />} />
          <Route path="/signup" element={<SignUpPage />} />
          
          
          <Route path="/shop/cat/accessories" element={<AccessoriesList />} />
          <Route path="/shop/dog/accessories" element={<AccessoriesListDog />} />
          <Route path="/shop/cat/nutrition" element={<NutritionList />} />
          <Route path="/shop/dog/nutrition" element={<NutritionListDog />} />
          
  
          <Route path="/dog-adoption" element={<ProtectedRoute allowedRoles={['user']}><DogAdoption /></ProtectedRoute>} />
          <Route path="/cat-adoption" element={<ProtectedRoute allowedRoles={['user']}><CatAdoption /></ProtectedRoute>} />
          <Route path="/give-pet" element={<ProtectedRoute allowedRoles={['user']}><GivePet /></ProtectedRoute>} />
          

          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/pet-details/:id" element={<PetDetails />} />

          <Route path="/articles" element={<ArticlePage />} />
          <Route path="/tips" element={<TipsPage />} />

         
          <Route path="/about-us" element={<AboutUsPage />} />

        
          <Route
            path="/admindashboard"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>

        <FooterNav />
      </BrowserRouter>
    </WishlistProvider>
  );
}

export default App;

