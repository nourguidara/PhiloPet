
import React, { createContext, useState, useContext } from 'react';

// Create the Wishlist Context
const WishlistContext = createContext();

// Create a custom hook to use the Wishlist Context
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Add or remove a pet from the wishlist
  const toggleWishlist = (pet) => {
    if (!pet) return; // Ensure the pet object is valid
    setWishlist((prevWishlist) => {
      const isInWishlist = prevWishlist.some((item) => item.id === pet.id); // Use `id` for uniqueness
      if (isInWishlist) {
        return prevWishlist.filter((item) => item.id !== pet.id);
      } else {
        return [...prevWishlist, pet];
      }
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
