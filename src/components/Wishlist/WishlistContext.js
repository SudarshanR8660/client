


// WishlistContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from '../../pages/auth/context/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const { auth } = useAuth();
  const wishlistEndpoint = 'https://server-1-1gbu.onrender.com/api/wishlist';

  useEffect(() => {
    if (auth && auth.user && auth.user._id) {
      fetchWishlist(auth.user._id);
    }
  }, [auth]);

  const fetchWishlist = async (userId) => {
    try {
      const response = await fetch(`${wishlistEndpoint}/${userId}`);

      if (response.ok) {
        const data = await response.json();
        // Set the quantity property to 1 for each product
        const wishlistWithQuantity = data.map(product => ({ ...product, quantity: 1 }));
        setWishlist(wishlistWithQuantity);
      } else {
        console.error('Error fetching wishlist:', response.statusText);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const addToWishlist = async (userId, productId, name, brand, desc, price,imageURL) => {
    try {
      const response = await fetch(wishlistEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          productId,
          name,
          brand,
          desc,
          price,
          imageURL,
        }),
      });

      if (response.ok) {
        toast.success("Add to wishlist successfully")
        console.log('Product added to wishlist successfully');
        console.log(userId,
          productId,
          name,
          brand,
          desc,
          price,
          imageURL,)
        fetchWishlist(userId);
      } else {
        toast.success("error adding to wishlist")
        console.error('Error adding to wishlist:', response.statusText);
      }
    } catch (error) {
      console.error('Add to wishlist error:', error);
    }
  };

  const removeFromWishlist = async (userId, productId) => {
    try {
      // Check if userId or productId is invalid
      if (!userId || !productId) {
        console.error('Invalid userId or productId. userId:', userId, 'productId:', productId);
        return;
      }

      const response = await fetch(`${wishlistEndpoint}/${userId}/${productId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        toast.success("Product removed from wishlist successfully")
        console.log('Product removed from wishlist successfully');
        fetchWishlist(userId);
      } else {
        const errorData = await response.json();
        console.error('Error removing from wishlist:', errorData.message);
      }
    } catch (error) {
      console.error('Remove from wishlist error:', error);
    }
  };

  

  const value = {
    wishlist,
    addToWishlist,
    fetchWishlist,
    removeFromWishlist,
    
  };

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
