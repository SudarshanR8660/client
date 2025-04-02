// //correctly working


// // import React, { createContext, useContext, useState, useEffect } from 'react';
// // import { useAuth } from '../auth/context/auth';
// // import { toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // const CartContext = createContext();

// // export const CartProvider = ({ children }) => {
// //   const [cart, setCart] = useState([]);
// //   const { auth } = useAuth();
// //   const cartStorageKey = 'cart';

// //   // useEffect(() => {
// //   //   const storedCart = JSON.parse(localStorage.getItem(cartStorageKey));
// //   //   if (storedCart) {
// //   //     setCart(storedCart);
// //   //   }
// //   // }, []);

// //   // const updateCartState = (updatedCart) => {
// //   //   setCart(updatedCart);
// //   //   localStorage.setItem(cartStorageKey, JSON.stringify(updatedCart));
// //   // };

// //   useEffect(() => {
// //     const storedCart = JSON.parse(localStorage.getItem(cartStorageKey)) || [];
// //     setCart(storedCart);
// //   }, [cartStorageKey]);

// //   const updateCartState = (updatedCart) => {
// //     setCart(updatedCart);
// //     localStorage.setItem(cartStorageKey, JSON.stringify(updatedCart));
// //   };
// //   const addToCart = async (productId, name, brand, desc, price,imageURL) => {
// //     // Check if the product is already in the cart
// //     const existingProductIndex = cart.findIndex(product => product.productId === productId);
  
// //     if (existingProductIndex !== -1) {
// //       // If the product is already in the cart, increase its quantity
// //       const updatedCart = [...cart];
// //       updatedCart[existingProductIndex].quantity += 1;
// //       updateCartState(updatedCart);
// //       toast.success('Product quantity increased in cart successfully');
// //     } else {
// //       // If the product is not in the cart, add it to the cart
// //       const updatedCart = [...cart, { productId, name, brand, desc, price,imageURL, quantity: 1 }];
// //       updateCartState(updatedCart);
// //       toast.success('Product added to cart successfully');
// //     }
// //   };
  

// //   const removeFromCart = async (userId, productId) => {
// //     const updatedCart = cart.filter(product => product.productId !== productId);
// //     updateCartState(updatedCart);
// //     toast.success('Product removed from cart successfully');
// //   };

// //   const increaseQuantity = (productId) => {
// //     const updatedCart = cart.map((product) => product.productId === productId ? { ...product, quantity: product.quantity + 1 } : product);
// //     updateCartState(updatedCart);
// //   };

// //   const decreaseQuantity = (productId) => {
// //     const updatedCart = cart.map((product) => product.productId === productId && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product);
// //     updateCartState(updatedCart);
// //   };

// //   const calculateTotalAmount = () => {
// //     return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
// //   };
// //   const clearCart = () => {
// //     setCart([]);
// //     localStorage.removeItem(cartStorageKey);
// //   };

// //   const value = {
// //     cart,
// //     addToCart,
// //     removeFromCart,
// //     increaseQuantity,
// //     decreaseQuantity,
// //     calculateTotalAmount,
// //     clearCart // Add the function for calculating total amount
// //   };

// //   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// // };

// // export const useCart = () => {
// //   const context = useContext(CartContext);
// //   if (!context) {
// //     throw new Error('useCart must be used within a CartProvider');
// //   }
// //   return context;
// // };



// // import React, { createContext, useContext, useState, useEffect } from 'react';
// // import { useAuth } from '../auth/context/auth';
// // import { toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // const CartContext = createContext();

// // export const CartProvider = ({ children }) => {
// //   const [cart, setCart] = useState([]);
// //   const { auth } = useAuth();
// //   const cartStorageKey = 'cart';





// //     useEffect(() => {
// //     const storedCart = JSON.parse(localStorage.getItem(cartStorageKey)) || [];
// //     setCart(storedCart);
// //   }, [cartStorageKey]);

// //   const updateCartState = (updatedCart) => {
// //     setCart(updatedCart);
// //     localStorage.setItem(cartStorageKey, JSON.stringify(updatedCart));
// //   };

// //   const addToCart = async (userId,productId, name, brand, desc, price, imageURL) => {
// //     // Check if the product is already in the cart
// //     const existingProductIndex = cart.findIndex(product => product.productId === productId);
  
// //     if (existingProductIndex !== -1) {
// //       // If the product is already in the cart, increase its quantity
// //       const updatedCart = [...cart];
// //       updatedCart[existingProductIndex].quantity += 1;
// //       updateCartState(updatedCart);
// //       toast.success('Product quantity increased in cart successfully');
// //     } else {
// //       // If the product is not in the cart, add it to the cart
// //       const updatedCart = [...cart, { userId,productId, name, brand, desc, price, imageURL, quantity: 1 }];
// //       updateCartState(updatedCart);
// //       toast.success('Product added to cart successfully');
// //     }
// //   };

// //   const removeFromCart = async (userId, productId) => {
// //     const updatedCart = cart.filter(product => product.productId !== productId);
// //     updateCartState(updatedCart);
// //     toast.success('Product removed from cart successfully');
// //   };

// //   const increaseQuantity = (productId) => {
// //     const updatedCart = cart.map((product) => product.productId === productId ? { ...product, quantity: product.quantity + 1 } : product);
// //     updateCartState(updatedCart);
// //   };

// //   const decreaseQuantity = (productId) => {
// //     const updatedCart = cart.map((product) => product.productId === productId && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product);
// //     updateCartState(updatedCart);
// //   };

// //   const calculateTotalAmount = () => {
// //     return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
// //   };
// //   const clearCart = () => {
// //     setCart([]);
// //     localStorage.removeItem(cartStorageKey);
// //   };
// //   const fetchCart = (userId) => {
// //     // Make a request to fetch cart data from the server using the userId
// //     fetch(`/api/cart/${userId}`)
// //       .then((response) => {
// //         // Check if the response is successful
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch cart data');
// //         }
// //         // Parse the response body as JSON
// //         return response.json();
// //       })
// //       .then((data) => {
// //         // Update the cart state with the fetched data
// //         setCart(data);
// //       })
// //       .catch((error) => {
// //         console.error('Fetch cart error:', error);
// //         // Handle errors if any
// //         // For example, you can show an error message to the user
// //       });
// //   };
  

// //   const value = {
// //     cart,
// //     addToCart,
// //     removeFromCart,
// //     increaseQuantity,
// //     decreaseQuantity,
// //     calculateTotalAmount,
// //     clearCart,
// //     fetchCart
// //   };

// //   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// // };

// // export const useCart = () => {
// //   const context = useContext(CartContext);
// //   if (!context) {
// //     throw new Error('useCart must be used within a CartProvider');
// //   }
// //   return context;
// // };


// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { useAuth } from '../auth/context/auth';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const { auth } = useAuth();

//   useEffect(() => {
//     if (auth && auth.user && auth.user._id) {
//       fetchCart(auth.user._id);
//     }
//   }, [auth]);

//   const fetchCart = async (userId) => {
//     try {
//       const response = await fetch(`http://localhost:4242/api/cart/${userId}`);
//       if (response.ok) {
//         const data = await response.json();
//         setCart(data);
//       } else {
//         throw new Error('Failed to fetch cart data');
//       }
//     } catch (error) {
//       console.error('Fetch cart error:', error);
//     }
//   };

//   const updateCartState = (updatedCart) => {
//     setCart(updatedCart);
//     // Assuming you're using an API to persist the cart, otherwise, this line can be removed.
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   const addToCart = async (userId, productId, name, brand, desc, price, imageURL) => {
//     try {
//       const response = await fetch('http://localhost:4242/api/cart', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ userId, productId, name, brand, desc, price, imageURL }),
//       });
//       if (response.ok) {
//         toast.success('Product added to cart successfully');
//         fetchCart(userId); // Fetch the cart again to update the state
//       } else {
//         throw new Error('Failed to add product to cart');
//       }
//     } catch (error) {
//       console.error('Add to cart error:', error);
//     }
//   };

//   const removeFromCart = async (userId, productId) => {
//     try {
//       const response = await fetch(`http://localhost:4242/api/cart/${userId}/${productId}`, { method: 'DELETE' });
//       if (response.ok) {
//         toast.success('Product removed from cart successfully');
//         fetchCart(userId); // Fetch the cart again to update the state
//       } else {
//         throw new Error('Failed to remove product from cart');
//       }
//     } catch (error) {
//       console.error('Remove from cart error:', error);
//     }
//   };

//   const increaseQuantity = (productId) => {
//     const updatedCart = cart.map(product =>
//       product.productId === productId ? { ...product, quantity: product.quantity + 1 } : product
//     );
//     updateCartState(updatedCart);
//   };

//   const decreaseQuantity = (productId) => {
//     const updatedCart = cart.map(product =>
//       product.productId === productId && product.quantity > 1
//         ? { ...product, quantity: product.quantity - 1 }
//         : product
//     );
//     updateCartState(updatedCart);
//   };

//   const calculateTotalAmount = () => {
//     return cart.reduce((total, product) => total + product.price * product.quantity, 0);
//   };

//   const clearCart = () => {
//     setCart([]);
//     localStorage.removeItem('cart');
//   };

//   const value = {
//     cart,
//     addToCart,
//     removeFromCart,
//     increaseQuantity,
//     decreaseQuantity,
//     calculateTotalAmount,
//     clearCart,
//     fetchCart,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };



// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { useAuth } from '../auth/context/auth';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const { auth } = useAuth();
//   const cartStorageKey = 'cart';





//     useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem(cartStorageKey)) || [];
//     setCart(storedCart);
//   }, [cartStorageKey]);

//   const updateCartState = (updatedCart) => {
//     setCart(updatedCart);
//     localStorage.setItem(cartStorageKey, JSON.stringify(updatedCart));
//   };
//   const addToCart = async (userId, productId, name, brand, desc, price, imageURL) => {
//     try {
//       // Check if the product is already in the cart
//       const existingProductIndex = cart.findIndex(product => product.productId === productId);
  
//       if (existingProductIndex !== -1) {
//         // If the product is already in the cart, increase its quantity
//         const updatedCart = [...cart];
//         updatedCart[existingProductIndex].quantity += 1;
//         updateCartState(updatedCart);
//         toast.success('Product quantity increased in cart successfully');
//       } else {
//         // If the product is not in the cart, add it to the cart
//         const newProduct = { userId, productId, name, brand, desc, price, imageURL, quantity: 1 };
//         const response = await fetch('http://localhost:4242/api/cart', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${auth.token}`,
//           },
//           body: JSON.stringify(newProduct),
//         });
  
//         if (!response.ok) {
//           throw new Error('Failed to add product to cart');
//         }
  
//         const updatedCart = [...cart, newProduct];
//         updateCartState(updatedCart);
//         toast.success('Product added to cart successfully');
//       }
//     } catch (error) {
//       console.error('Add to cart error:', error);
//       toast.error('Error adding product to cart');
//     }
//   };
  
//   // const addToCart = async (userId,productId, name, brand, desc, price, imageURL) => {
//   //   // Check if the product is already in the cart
//   //   const existingProductIndex = cart.findIndex(product => product.productId === productId);
  
//   //   if (existingProductIndex !== -1) {
//   //     // If the product is already in the cart, increase its quantity
//   //     const updatedCart = [...cart];
//   //     updatedCart[existingProductIndex].quantity += 1;
//   //     updateCartState(updatedCart);
//   //     toast.success('Product quantity increased in cart successfully');
//   //   } else {
//   //     // If the product is not in the cart, add it to the cart
//   //     const updatedCart = [...cart, { userId,productId, name, brand, desc, price, imageURL, quantity: 1 }];
//   //     updateCartState(updatedCart);
//   //     toast.success('Product added to cart successfully');
//   //   }
//   // };

//   const removeFromCart = async (userId, productId) => {
//     const updatedCart = cart.filter(product => product.productId !== productId);
//     updateCartState(updatedCart);
//     toast.success('Product removed from cart successfully');
//   };

//   const increaseQuantity = (productId) => {
//     const updatedCart = cart.map((product) => product.productId === productId ? { ...product, quantity: product.quantity + 1 } : product);
//     updateCartState(updatedCart);
//   };

//   const decreaseQuantity = (productId) => {
//     const updatedCart = cart.map((product) => product.productId === productId && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product);
//     updateCartState(updatedCart);
//   };

//   const calculateTotalAmount = () => {
//     return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
//   };
//   const clearCart = () => {
//     setCart([]);
//     localStorage.removeItem(cartStorageKey);
//   };
//   const fetchCart =async (userId) => {
//     // Make a request to fetch cart data from the server using the userId
//     fetch(`http://localhost:4242/api/cart/${userId}`)
//       .then((response) => {
//         // Check if the response is successful
//         if (!response.ok) {
//           throw new Error('Failed to fetch cart data');
//         }
//         // Parse the response body as JSON
//         return response.json();
//       })
//       .then((data) => {
//         // Update the cart state with the fetched data
//         setCart(data);
//       })
//       .catch((error) => {
//         console.error('Fetch cart error:', error);
//         // Handle errors if any
//         // For example, you can show an error message to the user
//       });
//   };
  

//   const value = {
//     cart,
//     addToCart,
//     removeFromCart,
//     increaseQuantity,
//     decreaseQuantity,
//     calculateTotalAmount,
//     clearCart,
//     fetchCart
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };


// import React, { createContext, useContext, useState } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const CartContext = createContext();

// export const useCart = () => {
//   return useContext(CartContext);
// };

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const fetchCart = async (userId) => {
//     try {
//       const response = await fetch(`http://localhost:4242/api/cart?userId=${userId}`);
//       const data = await response.json();
//       setCart(data);
//     } catch (error) {
//       console.error('Fetch cart error:', error);
//     }
//   };

//   const addToCart = async (userId, productId, name, brand, desc, price, imageURL) => {
//     try {
//       const response = await fetch('http://localhost:4242/api/cart', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ userId, productId, name, brand, desc, price, imageURL }),
//       });

//       if (response.ok) {
//         toast.success('Product added to cart');
//         fetchCart(userId); // Fetch the updated cart
//       } else {
//         toast.error('Failed to add product to cart');
//       }
//     } catch (error) {
//       console.error('Add to cart error:', error);
//       toast.error('Failed to add product to cart');
//     }
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, fetchCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };



// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { useAuth } from '../auth/context/auth';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const { auth } = useAuth();
//   const cartStorageKey = 'cart';



//   // useEffect(() => {
//   //   const storedCart = JSON.parse(localStorage.getItem(cartStorageKey)) || [];
//   //   setCart(storedCart);
//   // }, [cartStorageKey]);

//   // const updateCartState = (updatedCart) => {
//   //   setCart(updatedCart);
//   //   localStorage.setItem(cartStorageKey, JSON.stringify(updatedCart));
//   // };

//   //   useEffect(() => {
//   //   const storedCart = JSON.parse(localStorage.getItem(cartStorageKey)) || [];
//   //   setCart(storedCart);
//   // }, [cartStorageKey]);

//   // const updateCartState = (updatedCart) => {
//   //   setCart(updatedCart);
//   //   localStorage.setItem(cartStorageKey, JSON.stringify(updatedCart));
//   // };

//   // const addToCart = async (userId,productId, name, brand, desc, price, imageURL) => {
//   //   // Check if the product is already in the cart
//   //   const existingProductIndex = cart.findIndex(product => product.productId === productId);
  
//   //   if (existingProductIndex !== -1) {
//   //     // If the product is already in the cart, increase its quantity
//   //     const updatedCart = [...cart];
//   //     updatedCart[existingProductIndex].quantity += 1;
//   //     updateCartState(updatedCart);
//   //     toast.success('Product quantity increased in cart successfully');
//   //   } else {
//   //     // If the product is not in the cart, add it to the cart
//   //     const updatedCart = [...cart, { userId,productId, name, brand, desc, price, imageURL, quantity: 1 }];
//   //     updateCartState(updatedCart);
//   //     toast.success('Product added to cart successfully');
//   //   }
//   // };
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem(cartStorageKey)) || [];
//     setCart(storedCart);
//   }, [cartStorageKey]);

//   const updateCartState = (updatedCart) => {
//     setCart(updatedCart);
//     localStorage.setItem(cartStorageKey, JSON.stringify(updatedCart));
//   };

//   const addToCart = (product) => {
//     const existingProductIndex = cart.findIndex((item) => item.productId === product._id);
  
//     if (existingProductIndex !== -1) {
//       // If the product already exists in the cart, update its quantity
//       const updatedCart = [...cart];
//       updatedCart[existingProductIndex].quantity += 1;
//       setCart(updatedCart);
//     } else {
//       // If the product doesn't exist in the cart, add it
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
  
//     toast.success('Product added to cart successfully');
//   };
  
  
  
  


//   const removeFromCart = async (userId, productId) => {
//     const updatedCart = cart.filter(product => product.productId !== productId);
//     updateCartState(updatedCart);
//     toast.success('Product removed from cart successfully');
//   };

//   const increaseQuantity = (productId) => {
//     const updatedCart = cart.map((product) => product.productId === productId ? { ...product, quantity: product.quantity + 1 } : product);
//     updateCartState(updatedCart);
//   };

//   const decreaseQuantity = (productId) => {
//     const updatedCart = cart.map((product) => product.productId === productId && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product);
//     updateCartState(updatedCart);
//   };

//   const calculateTotalAmount = () => {
//     return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
//   };
//   const clearCart = () => {
//     setCart([]);
//     localStorage.removeItem(cartStorageKey);
//   };
//   const fetchCart = (userId) => {
//     // Make a request to fetch cart data from the server using the userId
//     fetch(`http://localhost:4242/api/cart/${userId}`)
//       .then((response) => {
//         // Check if the response is successful
//         if (!response.ok) {
//           throw new Error('Failed to fetch cart data');
//         }
//         // Parse the response body as JSON
//         return response.json();
//       })
//       .then((data) => {
//         // Update the cart state with the fetched data
//         setCart(data);
//       })
//       .catch((error) => {
//         console.error('Fetch cart error:', error);
//         // Handle errors if any
//         // For example, you can show an error message to the user
//       });
//   };
  

//   const value = {
//     cart,
//     addToCart,
//     removeFromCart,
//     increaseQuantity,
//     decreaseQuantity,
//     calculateTotalAmount,
//     clearCart,
//     fetchCart
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };


// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const CartContext = createContext();

// const getCartStorageKey = (userId) => `cart_${userId}`;

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const fetchCart = (userId) => {
//     const storedCart = JSON.parse(localStorage.getItem(getCartStorageKey(userId))) || [];
//     setCart(storedCart);
//   };

//   useEffect(() => {
//     const userId = JSON.parse(localStorage.getItem('currentUserId'));
//     if (userId) {
//       fetchCart(userId);
//     }
//   }, []);

//   const updateCartState = (userId, updatedCart) => {
//     setCart(updatedCart);
//     localStorage.setItem(getCartStorageKey(userId), JSON.stringify(updatedCart));
//   };

//   const addToCart = (userId, productId, name, brand, desc, price, imageURL) => {
//     const storedCart = JSON.parse(localStorage.getItem(getCartStorageKey(userId))) || [];
//     const existingProductIndex = storedCart.findIndex(product => product.productId === productId);
//     if (existingProductIndex !== -1) {
//       storedCart[existingProductIndex].quantity += 1;
//       updateCartState(userId, storedCart);
//       toast.success('Product quantity increased in cart successfully');
//     } else {
//       const updatedCart = [...storedCart, { userId, productId, name, brand, desc, price, imageURL, quantity: 1 }];
//       updateCartState(userId, updatedCart);
//       toast.success('Product added to cart successfully');
//     }
//   };

//   const removeFromCart = (userId, productId) => {
//     const storedCart = JSON.parse(localStorage.getItem(getCartStorageKey(userId))) || [];
//     const updatedCart = storedCart.filter(product => product.productId !== productId);
//     updateCartState(userId, updatedCart);
//     toast.success('Product removed from cart successfully');
//   };

//   const updateCartItemQuantity = (userId, productId, quantity) => {
//     const storedCart = JSON.parse(localStorage.getItem(getCartStorageKey(userId))) || [];
//     const updatedCart = storedCart.map(product =>
//       product.productId === productId ? { ...product, quantity } : product
//     );
//     updateCartState(userId, updatedCart);
//   };
//   const increaseQuantity = (productId) => {
//     const updatedCart = cart.map((product) => product.productId === productId ? { ...product, quantity: product.quantity + 1 } : product);
//     updateCartState(updatedCart);
//   };

//   const decreaseQuantity = (productId) => {
//     const updatedCart = cart.map((product) => product.productId === productId && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product);
//     updateCartState(updatedCart);
//   };

//   const calculateTotalAmount = () => {
//     return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
//   };
//   const clearCart = () => {
//     setCart([]);
//     localStorage.removeItem(cartStorageKey);
//   };
//   const value = {
//     cart,
//     addToCart,
//     removeFromCart,
//     updateCartItemQuantity,
//     fetchCart,increaseQuantity, decreaseQuantity
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };

// export const useCart = () => {
//   return useContext(CartContext);
// };



// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useAuth } from '../auth/context/auth';






// const CartContext = createContext();

// const getCartStorageKey = (userId) => `cart_${userId}`;

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const { auth } = useAuth();

//   const fetchCart = (userId) => {
//     const storedCart = JSON.parse(localStorage.getItem(getCartStorageKey(userId))) || [];
//     setCart(storedCart);
//   };




//   const [totalAmount, setTotalAmount] = useState(0); // Initialize totalAmount

//   // Your cart-related functions (fetchCart, addToCart, removeFromCart, etc.)

//   useEffect(() => {
//     // Calculate total amount whenever cart changes
//     const newTotalAmount = cart.reduce((total, product) => {
//       return total + (product.price * product.quantity);
//     }, 0);
//     setTotalAmount(newTotalAmount);
//   }, [cart]);
//   useEffect(() => {
//     const userId = JSON.parse(localStorage.getItem('currentUserId'));
//     if (userId) {
//       fetchCart(userId);
//     }
//   }, []);

//   const updateCartState = (userId, updatedCart) => {
//     setCart(updatedCart);
//     localStorage.setItem(getCartStorageKey(userId), JSON.stringify(updatedCart));
//   };

//   const addToCart = (userId, productId, name, brand, desc, price, imageURL) => {
//     const storedCart = JSON.parse(localStorage.getItem(getCartStorageKey(userId))) || [];
//     const existingProductIndex = storedCart.findIndex(product => product.productId === productId);
//     if (existingProductIndex !== -1) {
//       storedCart[existingProductIndex].quantity += 1;
//       updateCartState(userId, storedCart);
//       toast.success('Product quantity increased in cart successfully');
//     } else {
//       const updatedCart = [...storedCart, { userId, productId, name, brand, desc, price, imageURL, quantity: 1 }];
//       updateCartState(userId, updatedCart);
//       toast.success('Product added to cart successfully');
//     }
//   };

//   const removeFromCart = (userId, productId) => {
//     const storedCart = JSON.parse(localStorage.getItem(getCartStorageKey(userId))) || [];
//     const updatedCart = storedCart.filter(product => product.productId !== productId);
//     updateCartState(userId, updatedCart);
//     toast.success('Product removed from cart successfully');
//   };

//   const updateCartItemQuantity = (userId, productId, quantity) => {
//     const storedCart = JSON.parse(localStorage.getItem(getCartStorageKey(userId))) || [];
//     const updatedCart = storedCart.map(product =>
//       product.productId === productId ? { ...product, quantity } : product
//     );
//     updateCartState(userId, updatedCart);
//   };
//   const increaseQuantity = (productId) => {
//     const updatedCart = cart.map((product) => product.productId === productId ? { ...product, quantity: product.quantity + 1 } : product);
//     updateCartState(updatedCart);
//   };

//   const decreaseQuantity = (productId) => {
//     const updatedCart = cart.map((product) => product.productId === productId && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product);
//     updateCartState(updatedCart);
//   };

//   const calculateTotalAmount = () => {
//     return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
//   };

//   const clearCart = () => {
//     if (auth && auth.user && auth.user._id) {
//   const userId = auth?.user?._id;
//       setCart([]);
//       localStorage.removeItem(getCartStorageKey(userId));
//     }
//   };
//   const value = {
//     cart,
//     addToCart,
//     removeFromCart,
//     updateCartItemQuantity,
//     fetchCart,
//     increaseQuantity,
//     decreaseQuantity,
//     calculateTotalAmount,
//     clearCart,totalAmount
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };

// export const useCart = () => {
//   return useContext(CartContext);
// };





import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../auth/context/auth';

const CartContext = createContext();

const getCartStorageKey = (userId) => `cart_${userId}`;

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { auth } = useAuth();
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (auth && auth.user && auth.user._id) {
      const userId = auth.user._id;
      fetchCart(userId);
    }
  }, [auth]);

  useEffect(() => {
    const newTotalAmount = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    setTotalAmount(newTotalAmount);
  }, [cart]);

  const fetchCart = (userId) => {
    const storedCart = JSON.parse(localStorage.getItem(getCartStorageKey(userId))) || [];
    setCart(storedCart);
  };

  const updateCartState = (userId, updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem(getCartStorageKey(userId), JSON.stringify(updatedCart));
  };

  const addToCart = (userId, productId, name, brand, desc, price, imageURL) => {
    const storedCart = JSON.parse(localStorage.getItem(getCartStorageKey(userId))) || [];
    const existingProductIndex = storedCart.findIndex(product => product.productId === productId);
    if (existingProductIndex !== -1) {
      storedCart[existingProductIndex].quantity += 1;
      updateCartState(userId, storedCart);
      toast.success('Product quantity increased in cart successfully');
    } else {
      const updatedCart = [...storedCart, { userId, productId, name, brand, desc, price, imageURL, quantity: 1 }];
      updateCartState(userId, updatedCart);
      toast.success('Product added to cart successfully');
    }
  };

  const removeFromCart = (userId, productId) => {
    const storedCart = JSON.parse(localStorage.getItem(getCartStorageKey(userId))) || [];
    const updatedCart = storedCart.filter(product => product.productId !== productId);
    updateCartState(userId, updatedCart);
    toast.success('Product removed from cart successfully');
  };

  const updateCartItemQuantity = (userId, productId, quantity) => {
    const storedCart = JSON.parse(localStorage.getItem(getCartStorageKey(userId))) || [];
    const updatedCart = storedCart.map(product =>
      product.productId === productId ? { ...product, quantity } : product
    );
    updateCartState(userId, updatedCart);
  };

  const increaseQuantity = (userId, productId) => {
    const updatedCart = cart.map(product => 
      product.productId === productId ? { ...product, quantity: product.quantity + 1 } : product
    );
    updateCartState(userId, updatedCart);
  };

  const decreaseQuantity = (userId, productId) => {
    const updatedCart = cart.map(product => 
      product.productId === productId && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
    );
    updateCartState(userId, updatedCart);
  };

  const calculateTotalAmount = () => {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
  };

  const clearCart = () => {
    if (auth && auth.user && auth.user._id) {
      const userId = auth.user._id;
      setCart([]);
      localStorage.removeItem(getCartStorageKey(userId));
    }
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    fetchCart,
    increaseQuantity,
    decreaseQuantity,
    calculateTotalAmount,
    clearCart,
    totalAmount
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};
