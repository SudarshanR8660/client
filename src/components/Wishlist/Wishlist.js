import React, { useEffect } from 'react';
import { useWishlist } from './WishlistContext';
import { useAuth } from '../../pages/auth/context/auth';
import { useCart } from '../../pages/cart/CartContext';
import { FaTrashAlt, FaShoppingCart } from 'react-icons/fa';

const Wishlist = () => {
  const { wishlist, addToWishlist, removeFromWishlist, fetchWishlist } = useWishlist();
  const { auth } = useAuth();
  const { addToCart } = useCart();

  useEffect(() => {
    if (auth && auth.user && auth.user._id) {
      fetchWishlist(auth.user._id);
    }
  }, [auth, fetchWishlist]);

  const handleRemoveFromWishlist = (productId) => {
    if (auth && auth.user && auth.user._id) {
      removeFromWishlist(auth.user._id, productId);
    }
  };

  const handleAddToCart = (product) => {
    if (auth && auth.user && auth.user._id) {
      addToCart(auth.user._id, product.productId, product.name, product.brand, product.desc, product.price,product.imageURL);
    }
  };

  const containerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const headingStyles = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
    width: '100%',
    textAlign: 'center',
  };

  const productStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '4px',
    padding: '10px',
    margin: '10px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    width: '200px',
  };

  const productImageStyles = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '4px',
    marginBottom: '10px',
  };

  const buttonStyles = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    padding: '5px 10px',
    marginTop: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyles = {
    backgroundColor: '#0056b3',
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Wishlist</h1>
      
      {wishlist.length === 0 ? (
        <p className="text-center text-lg">Your wishlist is empty.</p>
      ) : (
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-2 border-b">Image</th>
              <th className="p-2 border-b">Name</th>
              <th className="p-2 border-b">Brand</th>
              <th className="p-2 border-b">Price</th>
              <th className="p-2 border-b">Quantity</th>
              <th className="p-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((product) => (
              <tr key={product.productId} className="hover:bg-gray-100">
                <td className="p-2 border-b">
                  <img
                    src={`https://server-1-1gbu.onrender.com/${product.imageURL}`}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="p-2 border-b">{product.name}</td>
                <td className="p-2 border-b">{product.brand}</td>
                <td className="p-2 border-b">₹{product.price}</td>
                <td className="p-2 border-b">{product.quantity}</td>
                <td className="p-2 border-b flex space-x-2">
                  <button
                    onClick={() => handleRemoveFromWishlist(product.productId)}
                    className="bg-red-600 text-white p-2 rounded hover:bg-red-700 flex items-center"
                  >
                    <FaTrashAlt className="mr-2" /> Remove
                  </button>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 flex items-center"
                  >
                    <FaShoppingCart className="mr-2" /> Add to Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Wishlist;
