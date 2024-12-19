import React from 'react';
import { Link } from 'react-router-dom';
import './CatSelection.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const CatSelection = () => {
    return (
        <div className="cat-selection">
            <h1>Spoil Your Cat</h1>
            <div className="card-container">
                {/* Nutrition Card */}
                <div className="card">
                    <img
                        src="/Nutrition_Cat_Images/cat_nutrition.jpg"
                        alt="Cat Nutrition"
                        className="card-image"
                    />
                    <div className="card-content">
                        <h2>Cat Nutrition</h2>
                        <p>Find healthy, grain-free and Premium nutrition for your cat.</p>
                        <Link to="/shop/cat/nutrition">
                                <button className="shop-now-btn">
                                    <i className="fas fa-cat" style={{ fontSize: '24px', marginRight: '8px' }}></i>
                                    Shop Now
                                </button>
                        </Link>
                    </div>
                </div>

                {/* Accessories Card */}
                <div className="card">
                    <img
                        src="/Accessories_Cat_Images/cat_accessories.jpg"
                        alt="Cat Accessories"
                        className="card-image"
                    />
                    <div className="card-content">
                        <h2>Cat Accessories</h2>
                        <p>Browse a variety of stylish accessories for your cat.</p>
                        <Link to="/shop/cat/accessories">
                                <button className="shop-now-btn">
                                    <i className="fas fa-cat" style={{ fontSize: '24px', marginRight: '8px' }}></i>
                                    Shop Now
                                </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatSelection;
