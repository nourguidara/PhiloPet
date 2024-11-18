// import React, { createContext, useState, useContext } from 'react';

// const WishlistContext = createContext();

// export const useWishlist = () => useContext(WishlistContext);

// export const WishlistProvider = ({ children }) => {
//     const [petsWishlist, setPetsWishlist] = useState([]);
//     const [shopWishlist, setShopWishlist] = useState([]);
  
//     // Add or remove a pet from the wishlist
//     const togglePetWishlist = (pet) => {
//         setPetsWishlist((prevWishlist) => {
//           const isInWishlist = prevWishlist.find((item) => item.name === pet.name);
//           return isInWishlist
//             ? prevWishlist.filter((item) => item.name !== pet.name)
//             : [...prevWishlist, pet];
//         });
//       };

//       const toggleShopWishlist = (item) => {
//         setShopWishlist((prevWishlist) => {
//           const isInWishlist = prevWishlist.find((i) => i.id === item.id);
//           return isInWishlist
//             ? prevWishlist.filter((i) => i.id !== item.id)
//             : [...prevWishlist, item];
//         });
//       };
  
//     return (
//         <WishlistContext.Provider value={{ petsWishlist, shopWishlist, togglePetWishlist, toggleShopWishlist }}>
//         {children}
//       </WishlistContext.Provider>
//     );
//   };

import React, { createContext, useState, useContext } from 'react';

// Create the Wishlist Context
const WishlistContext = createContext();

// Create a custom hook to use the Wishlist Context
export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Add or remove a pet from the wishlist
  const toggleWishlist = (pet) => {
    setWishlist((prevWishlist) => {
      const isInWishlist = prevWishlist.find((item) => item.name === pet.name);
      if (isInWishlist) {
        return prevWishlist.filter((item) => item.name !== pet.name);
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
