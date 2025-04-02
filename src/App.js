



import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Home, Contact, Login, Register, Reset, Admin } from "./pages";
import { Header, Footer } from "./components";
import AdminOnlyRoute from "./components/adminOnlyRoute/AdminOnlyRoute";
import ProductDetails from "./components/product/productDetails/ProductDetails";
import Cart from "./pages/cart/Cart";
import CheckoutDetails from "./pages/checkout/CheckoutDetails";

import CheckoutSuccess from "./pages/checkout/CheckoutSuccess";

import OrderDetails from './components/admin/orderDetails/OrderDetails';
import ReviewProducts from "./components/reviewProducts/ReviewProducts";
import NotFound from "./pages/notFound/NotFound";
import Wishlist from './components/Wishlist/Wishlist';
import { WishlistProvider } from './components/Wishlist/WishlistContext';
import { CartProvider } from './pages/cart/CartContext';
import CartPage from './pages/cart/Cart';
import UserDashboard from './pages/User/UserDashboard';
import { AuthProvider } from './pages/auth/context/auth';
import UserProfilePage from './pages/checkout/UserPage';
import Checkout from './pages/checkout/Checkout';
import Orders from './components/admin/orders/Orders';
import OrderDetail from './pages/orderDetails/OrderDetail';
import UserOrder from './pages/orderDetails/UserOrder';
import OrderHistory from './pages/orderHistory/OrderHistory'




   


function App() {

  return (
    <BrowserRouter>
      <ToastContainer />
   
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />    
        <Route path="/userprofilepage" element={<UserProfilePage />} /> 
        <Route path="/OrderDetails/:orderId" element={<OrderDetails />} /> 
        <Route path="/Orders" element={<Orders />} /> 
        <Route path="/OrderDetails" element={<OrderDetails />} /> 

        <Route path="/OrderDetail" element={<OrderDetail />} /> 
        
        <Route path="/UserOrder/:orderId" element={<UserOrder />} /> 

        <Route path="/OrderHistory/users/:userId/orders" element={<OrderHistory />} /> 
 
        
      </Routes>
      <CartProvider>
        <Routes>
      <Route path="/checkoutdetails" element={<CheckoutDetails />} />
        
        <Route path="/Checkout" element={<Checkout />} />  <Route path="/CheckoutSuccess" element={<CheckoutSuccess />} /> </Routes>
      <WishlistProvider>
        <Routes>
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </WishlistProvider>

    <CartProvider>        <Routes>
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        </CartProvider>

      </CartProvider>

      <Footer />
  
    </BrowserRouter>
  );
}

export default App;


