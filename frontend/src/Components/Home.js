import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Static list of products (Meilleures Ventes section)
const products = [
  {
    id: 1,
    name: 'BOITE KIPPY CAT BOEU...',
    category: 'HUMIDES CHATS',
    price: '7.800 DT',
    rating: '0.0',
    image: '/images/boiteKippy.jpeg',  },
  {
    id: 2,
    name: 'LIT SANICAT CLASSIC...',
    category: 'LITIERES',
    price: '44.000 DT',
    rating: '0.0',
    image: '/images/litSanicat.jpg', // Replace with the actual path
  },
  {
    id: 3,
    name: 'OWNAT CHAT DAILY...',
    category: 'CROQUETTE CHATS',
    price: '238.000 DT',
    rating: '0.0',
    image: '/images/ownat.jpeg', // Replace with the actual path
  },
  {
    id: 4,
    name: 'CATSWAY 18L NATUREL',
    category: 'LITIERES',
    price: '39.000 DT',
    rating: '0.0',
    image: '/images/catsway.jpeg', // Replace with the actual path
  },
  
];

// Static list for Nouveautés section
const nouveauteProducts = [
  {
    id: 1,
    name: "Yaourt Articular Poulet pour chien Yow Up",
    category: "Les Delices",
    price: "10.000 DT",
    rating: '0.0',
    image: '/images/yaourt1.jpeg',
  },
  {
    id: 2,
    name: "Yaourt Articular Natural pour chien Yow Up",
    category: " Les Delices",
    price: "10.000DT",
    rating: '0.0',
    image: '/images/yaourt2.jpeg',
  },
  {
    id: 3,
    name: "Yaourt Articular Salamon pour chien Yow Up",
    category: " Les Delices",
    price: "10.000 DT",
    rating: '0.0',
    image: '/images/yaourt3.jpeg',
  },
  {
    id: 4,
    name: "Yaourt Articular Turkey pour chien Yow Up",
    category: "Les Delices",
    price: "10.000 DT",
    rating: '0.0',
    image: '/images/yaourt4.jpeg',
  },
];

// Static list for Promos section
const promos = [
  {
    id: 1,
    name: "Collier Ice cream",
    category: "accesoir",
    price: "25.500 DT",
    discount: "30%", // Added discount for promo
    rating: "4.5",
    image: "/images/collier.jpeg", // Replace with the actual path
  },
  {
    id: 2,
    name: "LAISSE CHIEN 120CM",
    category: "Acessoir",
    price: "31.000 DT",
    discount: "20%", // Added discount for promo
    rating: "4.0",
    image: "/images/laisse.jpeg", // Replace with the actual path
  },
  {
    id: 3,
    name: "BOITE SIMBA CAT WITH CHICKEN 415GR",
    category: " Aliment humide",
    price: "6.000 DT",
    discount: "25%", // Added discount for promo
    rating: "4.8",
    image: "/images/boite.jpeg", // Replace with the actual path
  },
  {
    id: 4,
    name: "ROPE TOY IMPACT W/BALL HANDLE 30cm",
    category: "JOUET ",
    price: "30.000 DT",
    discount: "15%", // Added discount for promo
    rating: "4.2",
    image: "/images/ropetoy.jpeg", // Replace with the actual path
  },
];




const Home = () => {

  // State to manage which dynamic image is displayed in the banner
  const [currentImage, setCurrentImage] = useState(0);
 const dynamicImages = ["/images/pub3.png", "/images/pub4.png"]; // Paths to dynamic images

 // Effect to switch images every 3 seconds
 useEffect(() => {
   const interval = setInterval(() => {
     setCurrentImage((prevImage) => (prevImage + 1) % dynamicImages.length);
   }, 3000); // 3-second interval

   return () => clearInterval(interval); // Cleanup on unmount
 }, [dynamicImages.length]);

  return (
    
    <div className="home">
        
 
      

      {/* Main Content Section */}
      <div className="home-container">
        {/* Dynamic Banner Section */}
        <div className="main-banner">
          <div className="dynamic-image-section">
            <img
              src={dynamicImages[currentImage]}
              alt={`Dynamic Banner ${currentImage + 1}`}
              className="dynamic-image"
            />
          </div>
        </div>
        </div> 


      {/* Meilleures Ventes Section */}
      <div className="meilleures-ventes">
        <h2 className="section-title">Meilleures Ventes</h2>
        <div className="products-container">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-price">{product.price}</p>
                <div className="product-rating">
                  <span className="rating-value">{product.rating}</span>
                  <span className="star">⭐</span>
                </div>
              </div>
              <div className="favorite-icon">
                <span>♡</span>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

  {/* Updated Image Section */}
      <div className="home-container">
  <div className="image-banner">
    <img src="/images/pub2.png" alt="Monge Gift Products" className="pub2-image" />
  </div>
</div>

      {/* Nouveautés Section */}
      <div className="nouveaute">
  <h2 className="section-title">Nouveauté</h2>
  <div className="products-container">
    {nouveauteProducts.map((product) => (
      <div key={product.id} className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-category">{product.category}</p>
          <p className="product-price">{product.price}</p>
          <div className="product-rating">
            <span className="rating-value">{product.rating}</span>
            <span className="star">⭐</span>
          </div>
        </div>
        <div className="favorite-icon">
          <span>♡</span>
        </div>
      </div>
    ))}
  </div>
  <div className="pagination">
    <span className="dot active"></span>
    <span className="dot"></span>
    <span className="dot"></span>
  </div>
</div>

{/*  Photo section */}
<div className="product-image">
        <img src="/images/pub.png" alt="Advertisement Banner" />
      </div>

{/* Promos Section */}
<div className="promos">
  <h2 className="section-title">Promotions</h2>
  <div className="products-container">
    {promos.map((promo) => (
      <div key={promo.id} className="product-card">
        <img src={promo.image} alt={promo.name} className="product-image" />
        <div className="product-info">
          <h3 className="product-name">{promo.name}</h3>
          <p className="product-category">{promo.category}</p>
          <p className="product-price">
            {promo.price} <span className="promo-discount">({promo.discount})</span>
          </p>
          <div className="product-rating">
            <span className="rating-value">{promo.rating}</span>
            <span className="star">⭐</span>
          </div>
        </div>
        <div className="favorite-icon">
          <span>♡</span>
        </div>
      </div>
    ))}
  </div>
  <div className="pagination">
    <span className="dot active"></span>
    <span className="dot"></span>
    <span className="dot"></span>
  </div>
</div>


    </div>
  );
};

export default Home;
