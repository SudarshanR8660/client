import React, { useEffect } from "react";
import Product from "../../components/product/Product";
import Slider from "../../components/slider/Slider";
import { WishlistProvider } from "../../components/Wishlist/WishlistContext";
import Wishlist from "../../components/Wishlist/Wishlist";
import { CartProvider } from "../cart/CartContext";
import Cart from "../cart/Cart"
import { AuthProvider } from "../../pages/auth/context/auth"

const Home = () => {
  const url = window.location.href;

  useEffect(() => {
    const scrollToProducts = () => {
      if (url.includes("#products")) {
        window.scrollTo({
          top: 700,
          behavior: "smooth",
        });
        return;
      }
    };
    scrollToProducts();
  }, [url]);

  return (
    <div>
      <Slider />
      <AuthProvider>
      <CartProvider>
      <WishlistProvider>
      <Product />
  
     
  
    </WishlistProvider>
      </CartProvider>
      </AuthProvider>
    </div>
  );
};

export default Home;