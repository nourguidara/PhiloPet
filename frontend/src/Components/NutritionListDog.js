import React, { useState } from 'react';
import './NutritionListDog.css';

const NutritionListDog = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Dog Food - Duck & Pheasant  ',
            price: 25,
            rating: 5,
            description: 'Nutritious and balanced meal with duck and pheasant meat  1.5KG. ',
            image: '/Nutrition_Dog_Images/dog_food_duck.jpg',
            quantity: 0
        },
        {
            id: 2,
            name: 'Dog Treats - salmon & turkey',
            price: 12,
            rating: 4,
            description: 'Delicious salmon and turkey treats for dogs  1.5KG. ',
            image: '/Nutrition_Dog_Images/dog_food_turkey.jpg',
            quantity: 0
        },
        {
            id: 3,
            name: 'Dog Food - Salmon & Potato free',
            price: 30,
            rating: 5,
            description: 'Grain-free food with salmon and potato free  1.5KG. ',
            image: '/Nutrition_Dog_Images/dog_food_salmon.jpg',
            quantity: 0
        },
        {
            id: 4,
            name: 'Dog Vitamins & Supplements',
            price: 20,
            rating: 4,
            description: 'Essential vitamins for healthy growth.',
            image: '/Nutrition_Dog_Images/dog_vitamins.jpg',
            quantity: 0
        },
        {
            id: 5,
            name: 'Dental Chews',
            price: 15,
            rating: 4,
            description: 'Chews to keep your dog’s teeth clean and healthy.',
            image: '/Nutrition_Dog_Images/dog_dental_chews.jpeg',
            quantity: 0
        },

      
        {
            id: 6,
            name: 'High-Protein Dog Food',
            price: 30,
            rating: 4,
            description: 'A high-protein formula for active dogs.',
            image: '/Nutrition_Dog_Images/dog_protein_food.jpg',
            quantity: 0
        },
        {
            id: 7,
            name: 'Grain-Free Dog Food',
            price: 28,
            rating: 4,
            description: 'Grain-free formula for sensitive stomachs.',
            image: '/Nutrition_Dog_Images/grain_free_dog_food.png',
            quantity: 0
        },
        {
            id: 8,
            name: 'Omega-3 Dog Food',
            price: 22,
            rating: 4,
            description: 'Rich in Omega-3 for shiny coats and healthy skin.',
            image: '/Nutrition_Dog_Images/dog_omega_food.jpg',
            quantity: 0
        },
        {
            id: 9,
            name: 'Puppy Growth Formula',
            price: 25,
            rating: 5,
            description: 'Specially designed for growing puppies.',
            image: '/Nutrition_Dog_Images/puppy_growth_formula.jpg',
            quantity: 0
        },
        {
            id: 10,
            name: 'Senior Dog Food',
            price: 27,
            rating: 4,
            description: 'Nutritious and easy-to-digest food for senior dogs.',
            image: '/Nutrition_Dog_Images/senior_dog_food.jpg',
            quantity: 0
        },
        

    ]);


    const [cart, setCart] = useState([]);
    const [notification, setNotification] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [checkoutModalOpen, setCheckoutModalOpen] = useState(false); // New state for the checkout modal
    const [checkoutSuccess, setCheckoutSuccess] = useState(false);
    const [deliveryDetails, setDeliveryDetails] = useState({
        address: '',
        phoneNumber: '',
        paymentMethod: 'cash',
        cardNumber: ''
    });

    const handleRatingChange = (id, newRating) => {
        setItems(
            items.map((item) =>
                item.id === id ? { ...item, rating: newRating } : item
            )
        );
    };

    const handleIncrement = (id) => {
        setItems(
            items.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            })
        );
    };

    const handleDecrement = (id) => {
        setItems(
            items.map((item) => {
                if (item.id === id && item.quantity > 0) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            })
        );
    };

    const handleAddToCart = (id) => {
        const selectedItem = items.find(item => item.id === id);
        if (selectedItem.quantity > 0) {
            setCart(prevCart => {
                const itemInCart = prevCart.find(item => item.id === id);
                if (itemInCart) {
                    return prevCart.map(item =>
                        item.id === id
                            ? {
                                ...item,
                                quantity: item.quantity + selectedItem.quantity,
                                totalPrice: item.totalPrice + (selectedItem.price * selectedItem.quantity)
                            }
                            : item
                    );
                } else {
                    return [
                        ...prevCart,
                        {
                            ...selectedItem,
                            quantity: selectedItem.quantity,
                            totalPrice: selectedItem.price * selectedItem.quantity
                        }
                    ];
                }
            });

            setItems(items.map(item =>
                item.id === id ? { ...item, quantity: 0 } : item
            ));

            setNotification(`${selectedItem.name} added to cart!`);
            setTimeout(() => setNotification(''), 3000); // Hide notification after 3 seconds
        } else {
            setNotification("Please select a quantity before adding to the cart.");
            setTimeout(() => setNotification(''), 3000); // Hide notification after 3 seconds
        }
    };

    const handleRemoveFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const handleCheckoutModalOpen = () => {
        setCheckoutModalOpen(true); // Open the checkout modal when checkout is clicked
    };

    const handleCheckout = () => {
        setModalOpen(false); // Close the cart modal
        setCheckoutModalOpen(false);
        setCheckoutSuccess(true);
        setCart([]);
    
       
    
        setTimeout(() => setNotification(''), 3000); // Hide notification after 3 seconds
    
        setTimeout(() => setCheckoutSuccess(false), 3000); // Hide checkout success message after 3 seconds
    };
    
    

    const handleDeliveryDetailsChange = (e) => {
        const { name, value } = e.target;
        setDeliveryDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const getTotalPrice = () => {
        return cart.reduce((acc, item) => acc + item.totalPrice, 0);
    };

    

    return (
        <div className="nutrition-list">
            <h1>Dog Nutrition</h1>

            {/* Notification Banner */}
            {notification && <div className="notification-banner">{notification}</div>}

            <div className="items-container">
                {items.map((item) => (
                    <div key={item.id} className="item-card">
                        <img src={item.image} alt={item.name} className="item-image" />
                        <h2 className="item-name">{item.name}</h2>
                        <p className="item-description">{item.description}</p>
                        <p className="item-price">${item.price}</p>

                        {/* Quantity Controls */}
                        <div className="quantity-container">
                            <button className="quantity-button" onClick={() => handleIncrement(item.id)}>+</button>
                            <div className="quantity-display">{item.quantity}</div>
                            <button className="quantity-button" onClick={() => handleDecrement(item.id)}>-</button>
                        </div>


                        {/* Star Rating */}
                        <div className="star-rating">
                            {Array.from({ length: 5 }, (_, index) => (
                                <span
                                    key={index}
                                    className={index < item.rating ? 'filled' : 'empty'}
                                    onClick={() => handleRatingChange(item.id, index + 1)}
                                    onMouseEnter={(e) => (e.target.style.cursor = 'pointer')}
                                    onMouseLeave={(e) => (e.target.style.cursor = 'default')}
                                >
                                    ⭐
                                </span>
                            ))}
                        </div>

                        <button className="add-to-cart" onClick={() => handleAddToCart(item.id)}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            {/* Cart Icon */}
            <div className="cart-icon" onClick={toggleModal}>
                🛒
            </div>

            {/* Cart Modal */}
            {modalOpen && (
                <div className="cart-modal open">
                    <div className="cart-modal-content">
                        <div className="cart-modal-header">
                            <h2>Your Cart</h2>
                            <button onClick={toggleModal}>Close</button>
                        </div>
                        <div className="cart-modal-body">
                            {cart.length === 0 ? (
                                <p>Your cart is empty.</p>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className="cart-item">
                                        <img src={item.image} alt={item.name} className="cart-item-image" />
                                        <p>{item.name} x{item.quantity}</p>
                                        <p>Price: ${item.price}</p>
                                        <p>Total: ${item.totalPrice}</p>
                                        <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                                    </div>
                                ))
                            )}
                        </div>
                        <div className="cart-modal-footer">
                            <button onClick={handleCheckoutModalOpen}>Checkout</button>
                            <p>Total Price: ${getTotalPrice()}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Checkout Modal */}
            {checkoutModalOpen && (
                <div className="checkout-modal open">
                    <div className="checkout-modal-content">
                        <h2>Enter Your Delivery Information</h2>
                        <form onSubmit={(e) => { e.preventDefault(); handleCheckout(); }}>
                            <label>
                                Address:
                                <input
                                    type="text"
                                    name="address"
                                    value={deliveryDetails.address}
                                    onChange={handleDeliveryDetailsChange}
                                    required
                                />
                            </label>
                            <label>
                                Phone Number:
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={deliveryDetails.phoneNumber}
                                    onChange={handleDeliveryDetailsChange}
                                    required
                                />
                            </label>
                            <label>
                                Payment Method:
                                <select
                                    name="paymentMethod"
                                    value={deliveryDetails.paymentMethod}
                                    onChange={handleDeliveryDetailsChange}
                                >
                                    <option value="cash">Cash</option>
                                    <option value="card">Card</option>
                                </select>
                            </label>

                            {deliveryDetails.paymentMethod === 'card' && (
                                <label>
                                    Card Number:
                                    <input
                                        type="text"
                                        name="cardNumber"
                                        value={deliveryDetails.cardNumber}
                                        onChange={handleDeliveryDetailsChange}
                                        required
                                    />
                                </label>
                            )}

                            <button type="submit">Confirm Purchase</button>
                        </form>
                    </div>
                </div>
            )}

            {/* Checkout Success Popup */}
            {checkoutSuccess && (
                <div className="checkout-success">
                    <h2>Checkout Complete!</h2>
                    <p>Your order is out for delivery.</p>
                </div>
            )}
        </div>
    );
};

export default NutritionListDog;
