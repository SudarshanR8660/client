



import React, { useState, useEffect } from 'react';
import { useWishlist } from '../Wishlist/WishlistContext';
import { useCart } from '../../pages/cart/CartContext';
import { useAuth } from '../../pages/auth/context/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  filterContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '20px',
  },
  filterLabel: {
    marginBottom: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
  },
  filterInput: {
    fontSize: '16px',
    padding: '8px 12px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    width: '150px',
  },
  filterButton: {
    fontSize: '16px',
    padding: '8px 16px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#2196F3',
    color: '#fff',
    cursor: 'pointer',
    marginBottom: '10px',
    transition: 'background-color 0.3s ease',
    width: '150px',
  },
  productContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '50px',
  },
  productCard: {
    width: '300px',
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    background: 'rgba(66,191,212,0.7708333333333334) 59%)',
    transition: 'box-shadow 0.3s ease',
  },
  productCard_hover: {
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
  },
  productName: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  },
  productBrand: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  },
  productDesc: {
    fontSize: '16px',
    marginBottom: '10px',
    color: '#666',
  },
  productImage: {
    textAlign: 'center',
    marginBottom: '10px',
    maxHeight: '200px',
    overflow: 'hidden',
  },
  productImage__img: {
    maxWidth: '100%',
    height: 'auto',
  },
  productPrice: {
    fontSize: '16px',
    marginBottom: '20px',
    color: '#666',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  wishlistButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  wishlistButton_hover: {
    backgroundColor: '#3e8e41',
  },
  cartButton: {
    backgroundColor: '#2196F3',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  cartButton__hover: {
    backgroundColor: '#0056b3',
  },
};

const Product = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToWishlist, fetchWishlist } = useWishlist();
  const { addToCart, fetchCart, cart } = useCart(); // added cart to the destructure
  const { auth } = useAuth();
  const [loading, setLoading] = useState(true);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    fetch('https://server-1-1gbu.onrender.com/api/products')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched Products:', data);
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setLoading(false);
      });
  }, []);

  const uniqueCategories = [...new Set(products.map((product) => product.category))];

  const addToWishlistHandler = (product) => {
    const userId = auth?.user?._id;

    if (userId) {
      addToWishlist(userId, product._id, product.name, product.brand, product.desc, product.price, product.imageURL);
      fetchWishlist(userId);
    } else {
      toast.error("User not logged in. Please log in.");
      console.log('User not logged in. Redirect to login page or show login modal.');
    }
  };

  const addToCartHandler = (product) => {
    if (auth && auth.user && auth.user._id) {
      const userId = auth.user._id;
      console.log('userId', userId);
      console.log('productId', product._id);
      console.log('Adding to Cart:', product);
      addToCart(userId, product._id, product.name, product.brand, product.desc, product.price, product.imageURL);
      fetchCart(userId);
    } else {
      toast.error("User not logged in. Please log in.");
      console.log('User not logged in. Redirect to login page or show login modal.');
    }
  };

  const filterByPriceRange = () => {
    const min = parseInt(minPrice);
    const max = parseInt(maxPrice);

    if (!isNaN(min) && !isNaN(max)) {
      return products.filter((product) => product.price >= min && product.price <= max);
    } else if (!isNaN(min)) {
      return products.filter((product) => product.price >= min);
    } else if (!isNaN(max)) {
      return products.filter((product) => product.price <= max);
    } else {
      return products;
    }
  };

  return (
    <div style={styles.container}>
   

   <div className="col-span-12 md:col-span-3 max-md:max-w-md max-md:mx-auto p-6">
        <div className="box rounded-xl border border-gray-300 bg-white p-6 md:max-w-sm">
          <h6 className="font-medium text-base leading-7 text-black mb-5">Filter Products</h6>
          
          {/* Category Dropdown */}
          <label className="block text-sm font-medium text-gray-600 mb-2">Category</label>
          <div className="relative w-full mb-5">
            <select
              className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-20 block w-full py-2.5 px-4 appearance-none focus:outline-none bg-white"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              {uniqueCategories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          {/* Price Range */}
          <label className="block text-sm font-medium text-gray-600 mb-2">Price Range</label>
          <div className="flex items-center mb-5 gap-2">
            <input
              type="range"
              min="0"
              max="10000"
              step="100"
              className="w-full cursor-pointer"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <span className="text-gray-700 text-sm">₹{minPrice}</span>
          </div>
          <div className="flex items-center mb-5 gap-2">
            <input
              type="range"
              min="0"
              max="10000"
              step="100"
              className="w-full cursor-pointer"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span className="text-gray-700 text-sm">₹{maxPrice}</span>
          </div>
          
          {/* Search Button */}
          <button className="w-full py-2.5 flex items-center justify-center gap-2 rounded-full bg-blue-500 text-white font-semibold text-xs shadow-sm transition-all duration-500 hover:bg-green-500">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.4987 13.9997L13.1654 12.6663M13.832 7.33301C13.832 10.6467 11.1457 13.333 7.83203 13.333C4.51832 13.333 1.83203 10.6467 1.83203 7.33301C1.83203 4.0193 4.51832 1.33301 7.83203 1.33301C11.1457 1.33301 13.832 4.0193 13.832 7.33301Z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Search
          </button>
        </div>
      </div>



      <div className="bg-white p-6">
  {loading ? (
    <p className="text-center text-gray-500">Loading...</p>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filterByPriceRange()
        .filter(
          (product) =>
            selectedCategory === "All" || product.category === selectedCategory
        )
        .map((product, index) => (
          <div
            key={index}
            className="bg-gray-40 shadow-lg p-4"
          >
            <img
              src={`https://server-1-1gbu.onrender.com/${product.imageURL}`}
              alt={product.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-3">
              <div class="flex justify-between">
              <h4 className="text-lg font-semibold">{product.name}</h4>
              <h5 className="text-gray-600">{product.brand}</h5>
                </div>
             
             <div class="flex justify-between">
             <p className="text-sm text-gray-500">{product.desc}</p>
             <h5 className="text-lg font-bold mt-2">₹{product.price}</h5>
            </div>
             
            <div className="flex justify-between mt-4">
  <button
    className="bg-blue-500 text-white py-2 px-4 flex items-center gap-2 hover:bg-blue-600"
    onClick={() => addToWishlistHandler(product)}
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21l-1.45-1.35C5.4 15.4 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.9-8.55 11.16L12 21z" />
    </svg>
    Wishlist
  </button>
  
  <button
    className="bg-green-500 text-white py-2 px-4 flex items-center gap-2 hover:bg-green-600"
    onClick={() => addToCartHandler(product)}
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1 5m0 0a2 2 0 104 0m-4 0h4m6-5l-1 5m0 0a2 2 0 104 0m-4 0h4" />
    </svg>
    Cart
  </button>
</div>

            </div>
          </div>
        ))}
    </div>
  )}
</div>

    </div>
  );
};

export default Product;

