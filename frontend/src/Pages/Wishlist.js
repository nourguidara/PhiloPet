

import React from 'react';
import CardItem from '../Components/CardItem';
import { useWishlist } from '../Components/WishlistContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="wishlist-page">
      {wishlist.length === 0 ? (
        <h3>Your wishlist is empty</h3>
      ) : (
        wishlist.map((pet, index) => (
          <CardItem key={index} pet={pet} type={pet.type} />
        ))
      )}
    </div>
  );
};

export default Wishlist;
