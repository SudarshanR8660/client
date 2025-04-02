
import React from 'react';
import { useAuth } from '../auth/context/auth';
import Product from '../../components/product/Product';
import { WishlistProvider } from "../../components/Wishlist/WishlistContext";
import Wishlist from "../../components/Wishlist/Wishlist";
import { CartProvider } from "../cart/CartContext";
import Cart from "../cart/Cart"
import Navbar from './Navbar';
import Home from '../home/Home';


function HomePage() {
  const { auth } = useAuth();

  return (
    <div>
      
      <h1>
      
      </h1>
      {auth && auth.user ? (
        <h3>Welcome {auth.user.name}</h3>
      ) : (
        <h3>Welcome Guest</h3>
      )}
         <CartProvider>
      <WishlistProvider>
      <Product />
 
     
      {/* <Wishlist/>
    <Cart/> */}
    </WishlistProvider>
      </CartProvider>


      <div className="bg2"></div>
    </div>
  );
}

export default HomePage;





