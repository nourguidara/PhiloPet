// // import './App.css';
// // import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// // import LoginPage from './Pages/LoginPage';
// // import SignUpPage from './Pages/SignUpPage';
// // import Shop from './Pages/Shop';
// // import DogAdoption from './Pages/DogAdoption';
// // import CatAdoption from './Pages/CatAdoption';
// // // import PetAdoption from './Pages/PetAdoption';
// // import GivePet from './Pages/GivePet';
// // import HomePage from './Pages/HomePage';
// // import Wishlist from './Pages/Wishlist';
// // import PetDetails from './Pages/PetDetails';
// // import NavigationBar from './Components/NavigationBar';
// // import FooterNav from './Components/FooterNav';
// // import { WishlistProvider } from './Components/WishlistContext';
// // import AboutUsPage from './Pages/AboutUsPage';
// // import TipsPage from './Pages/TipsPage';
// // import ArticlePage from './Pages/ArticlePage';
// // import AdminDashboard from './Components/AdminDashboard';
// // import ProtectedRoute from './Components/ProtectedRoute';

// // function App() {
// //   return (
    
// //       <WishlistProvider>
// //         <BrowserRouter>
// //         <NavigationBar />

// //         <Routes>

// //       <Route path="/" element={<HomePage />} />
// //       <Route
// //           path="/shop"
// //           element={
// //             <ProtectedRoute>
// //               <Shop />
// //             </ProtectedRoute>
// //           }
// //         />
// //           <Route path="/dog-adoption" element={<ProtectedRoute><DogAdoption /></ProtectedRoute>} />
// //           <Route path="/cat-adoption" element={<ProtectedRoute><CatAdoption /></ProtectedRoute>} />
          
// //           <Route path="/give-pet" element={<ProtectedRoute><GivePet /></ProtectedRoute>} />
// //           <Route path="/wishlist" element={<Wishlist />} />
// //           <Route path="/pet-details/:id" element={<PetDetails />} />

// //           <Route path="/articles" element={<ArticlePage />} />
// //           <Route path="/tips" element={<TipsPage />} />
// //           <Route path="/about-us" element={<AboutUsPage />} />
// //           <Route path="/login" element={<LoginPage />} />
// //         <Route path="/signup" element={<SignUpPage />} />

// //         <Route path="/admindashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />



        
// //       </Routes>
// //       <FooterNav />
// //         </BrowserRouter>
// //       </WishlistProvider>
   
// //   );
// // }



// // export default App;

// import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import LoginPage from './Pages/LoginPage';
// import SignUpPage from './Pages/SignUpPage';

// import DogAdoption from './Pages/DogAdoption';
// import CatAdoption from './Pages/CatAdoption';
// import GivePet from './Pages/GivePet';
// import HomePage from './Pages/HomePage';
// import Wishlist from './Pages/Wishlist';
// import PetDetails from './Pages/PetDetails';
// import NavigationBar from './Components/NavigationBar';
// import FooterNav from './Components/FooterNav';
// import { WishlistProvider } from './Components/WishlistContext';
// import AboutUsPage from './Pages/AboutUsPage';
// import TipsPage from './Pages/TipsPage';
// import ArticlePage from './Pages/ArticlePage';
// import AdminDashboard from './Components/AdminDashboard';
// import AccessoriesList from './Components/AccessoriesList';
// import AccessoriesListDog from './Components/AccessoriesListDog';
// import NutritionList from './Components/NutritionList';
// import NutritionListDog from './Components/NutritionListDog';

// // Import the ProtectedRoute component
// import ProtectedRoute from './Components/ProtectedRoute';
// import AdminNavigationBar from './Components/AdminNavigationBar';

// function App() {
//   return (
//     <WishlistProvider>
//       <BrowserRouter>
//         <NavigationBar />

//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<HomePage />} /> {/* Home Page */}
          
          
//           {/* Shop Category Routes */}
//           <Route path="/shop/cat/accessories" element={<AccessoriesList />} />
//           <Route path="/shop/dog/accessories" element={<AccessoriesListDog />} />
//           <Route path="/shop/cat/nutrition" element={<NutritionList />} />
//           <Route path="/shop/dog/nutrition" element={<NutritionListDog />} />
          
//           {/* Adoption Routes */}
//           <Route path="/dog-adoption" element={<ProtectedRoute><DogAdoption /></ProtectedRoute>} />
//           <Route path="/cat-adoption" element={<ProtectedRoute><CatAdoption /></ProtectedRoute>} />
//           <Route path="/give-pet" element={<ProtectedRoute><GivePet /></ProtectedRoute>} />
          
//           {/* Wishlist and Pet Details */}
//           <Route path="/wishlist" element={<Wishlist />} />
//           <Route path="/pet-details/:id" element={<PetDetails />} />

//           {/* Articles and Resources */}
//           <Route path="/articles" element={<ArticlePage />} />
//           <Route path="/tips" element={<TipsPage />} />

//           {/* About Us */}
//           <Route path="/about-us" element={<AboutUsPage />} />

//           {/* User Routes */}
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<SignUpPage />} />

//           {/* Admin Dashboard - Protected */}
//           <Route
//   path="/admindashboard"
//   element={<ProtectedRoute adminOnly><AdminDashboard /></ProtectedRoute>}
// />

//         </Routes>

//         <FooterNav />
//       </BrowserRouter>
//     </WishlistProvider>
//   );
// }

// export default App;
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
// import AdminNavigationBar from './Components/AdminNavigationBar';
import Header from './Components/Header';

import { jwtDecode } from 'jwt-decode';

function App() {
  // const [role, setRole] = useState(localStorage.getItem("role"));  // Initialize role from localStorage

  // // Check for token and decode role on app load
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     try {
  //       const decoded = jwtDecode(token);
  //       setRole(decoded.role); // Extract role from token payload
  //     } catch (error) {
  //       console.error("Error decoding token:", error);
  //     }
  //   }
  // }, []);

  return (
    <WishlistProvider>
      <BrowserRouter>
        {/* Conditionally render navigation bar based on user role */}
        {/* {role === "admin" ? <AdminNavigationBar /> : <NavigationBar />} */}
        <Header/>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} /> 

          <Route path="/login" element={<LoginPage  />} />
          <Route path="/signup" element={<SignUpPage />} />
          
          {/* Shop Category Routes */}
          <Route path="/shop/cat/accessories" element={<AccessoriesList />} />
          <Route path="/shop/dog/accessories" element={<AccessoriesListDog />} />
          <Route path="/shop/cat/nutrition" element={<NutritionList />} />
          <Route path="/shop/dog/nutrition" element={<NutritionListDog />} />
          
          {/* Adoption Routes */}
          <Route path="/dog-adoption" element={<ProtectedRoute><DogAdoption /></ProtectedRoute>} />
          <Route path="/cat-adoption" element={<ProtectedRoute><CatAdoption /></ProtectedRoute>} />
          <Route path="/give-pet" element={<ProtectedRoute><GivePet /></ProtectedRoute>} />
          
          {/* Wishlist and Pet Details */}
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/pet-details/:id" element={<PetDetails />} />

          {/* Articles and Resources */}
          <Route path="/articles" element={<ArticlePage />} />
          <Route path="/tips" element={<TipsPage />} />

          {/* About Us */}
          <Route path="/about-us" element={<AboutUsPage />} />

          {/* Admin Dashboard - Protected */}
          <Route
            path="/admindashboard"
            element={
              <ProtectedRoute adminOnly>
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

