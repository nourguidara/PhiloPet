import React from 'react';
import { Link } from 'react-router-dom';
import './DogSelection.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const DogSelection = () => {
    return (
        <div className="dog-selection">
            <h1>Pamper Your Dog</h1>
            <div className="card-container">
                {/* Nutrition Card */}
                <div className="card">
                    <img
                        src="/Nutrition_Dog_Images/dog_nutrition.png"
                        alt="Dog Nutrition"
                        className="card-image"
                    />
                    <div className="card-content">
                        <h2>Dog Nutrition</h2>
                        <p>Discover high-quality, nutritious food options for your dog.</p>
                        <Link to="/shop/dog/nutrition">
                            <button className="shop-now-btn">
                                <i className="fas fa-dog" style={{ fontSize: '24px', marginRight: '8px' }}></i>
                                Shop Now
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Accessories Card */}
                <div className="card">
                    <img
                        src="/Accessories_Dog_Images/dog_accessories.jpg"
                        alt="Dog Accessories"
                        className="card-image"
                    />
                    <div className="card-content">
                        <h2>Dog Accessories</h2>
                        <p>Explore a range of fun and practical accessories for your dog.</p>
                        <Link to="/shop/dog/accessories">
                            <button className="shop-now-btn">
                                <i className="fas fa-dog" style={{ fontSize: '24px', marginRight: '8px' }}></i>
                                Shop Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DogSelection;
