


import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext';
import { useAuth } from '../auth/context/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Checkout from '../checkout/Checkout';
import CheckoutDetails from '../checkout/CheckoutDetails';
import { FaTrashAlt } from 'react-icons/fa';
const styles = {
  container: {
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  cartItemImage: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginRight: '20px',
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemName: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  cartItemBrand: {
    fontSize: '16px',
    color: '#666',
  },
  cartItemPrice: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
  },
  cartItemQuantity: {
    display: 'flex',
    alignItems: 'center',
  },
  quantityInput: {
    width: '50px',
    textAlign: 'center',
    marginRight: '10px',
  },
  removeButton: {
    backgroundColor: '#FF6347',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  quantityButton: {
    backgroundColor: '#4682B4',
    color: '#fff',
    border: 'none',
    padding: '8px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft: '10px',
  },
  emptyMessage: {
    fontSize: '18px',
    textAlign: 'center',
    marginTop: '20px',
  },
  totalPrice: {
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: '20px',
  },
};

const CartPage = () => {
  const { cart, fetchCart, removeFromCart, updateCartItemQuantity,calculateTotalAmount } = useCart();
  const { auth } = useAuth();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (auth && auth.user && auth.user._id) {
      fetchCart(auth.user._id);
    }
    setLoading(false);
  }, [auth, fetchCart]);


  useEffect(() => {
    if (auth && auth._id) {
      fetchCart(auth._id);
    }
  }, [fetchCart, auth]);

  useEffect(() => {
    setCartData(cart);
  }, [cart]);


  const handleRemove = (productId) => {
    const userId = auth?.user?._id;
    if (userId) {
      removeFromCart(userId, productId);
      fetchCart(userId);
    }
  };

  const handleQuantityChange = (productId, quantity) => {
    const userId = auth?.user?._id;
    if (userId && quantity > 0) {
      updateCartItemQuantity(userId, productId, quantity);
      fetchCart(userId);
    } else if (userId && quantity <= 0) {
      handleRemove(productId);
    }
  };

  const hasItemsInCart = cartData.length > 0;

  const handleCheckout = () => {
    if (auth && auth.user) {
      // Proceed to checkout
      navigate('/checkoutdetails');
    } else {
      // Prompt the user to log in
      navigate('/login');
    }
  };
  const handleIncreaseQuantity = (productId) => {
    const userId = auth?.user?._id;
    const item = cart.find(item => item.productId === productId);
    if (userId && item) {
      const newQuantity = item.quantity + 1;
      updateCartItemQuantity(userId, productId, newQuantity);
      fetchCart(userId);
    }
  };

  const handleDecreaseQuantity = (productId) => {
    const userId = auth?.user?._id;
    const item = cart.find(item => item.productId === productId);
    if (userId && item && item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      updateCartItemQuantity(userId, productId, newQuantity);
      fetchCart(userId);
    } else if (userId && item && item.quantity === 1) {
      handleRemove(productId);
    }
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  const totalAmount = calculateTotalPrice();
  console.log("Total Price in CartPage:", totalAmount);
  return (
   
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>
      {hasItemsInCart ? (
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.productId} className="flex items-center justify-between p-4 border-b border-gray-300">
              <img src={`https://server-1-1gbu.onrender.com/${item.imageURL}`} alt={item.name} className="w-32 h-32 object-cover mr-4" />
              <div className="flex-1">
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">{item.brand}</p>
                <p className="text-lg text-gray-800 font-medium">₹{item.price}</p>
                <div className="mt-2 flex items-center space-x-4">
                  <button
                    onClick={() => handleDecreaseQuantity(item.productId)}
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.productId, parseInt(e.target.value))}
                    className="w-16 p-1 text-center border rounded"
                    min="1"
                  />
                  <button
                    onClick={() => handleIncreaseQuantity(item.productId)}
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemove(item.productId)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrashAlt size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
      )}

      {hasItemsInCart && (
        <div className="mt-6 text-xl font-semibold text-right">
          <p>Total: ${calculateTotalPrice()}</p>
          <div className="mt-4 text-center">
            <button
              onClick={handleCheckout}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
