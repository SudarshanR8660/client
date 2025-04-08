

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useAuth } from '../auth/context/auth';
// // import { toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import Checkout from './Checkout';
// // import { useCart } from '../cart/CartContext'
// // import { Link } from 'react-router-dom';
// // const styles = {
// //   container: {
// //     maxWidth: '600px',
// //     margin: '0 auto',
// //     padding: '20px',
// //     border: '1px solid #ccc',
// //     borderRadius: '5px',
// //   },
// //   section: {
// //     marginBottom: '20px',
// //   },
// //   form: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(2, 1fr)',
// //     gap: '10px',
// //   },
// //   label: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //   },
// //   input: {
// //     padding: '8px',
// //     borderRadius: '4px',
// //     border: '1px solid #ccc',
// //   },
// //   button: {
// //     padding: '8px 16px',
// //     backgroundColor: '#007bff',
// //     color: '#fff',
// //     border: 'none',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //   },
// // };

// // const ShippingAddressForm = () => {
// //   const { auth } = useAuth();
// //   const { cart,calculateTotalAmount } = useCart();
// //   const userId = auth && auth.user ? auth.user._id : null;
// //   const totalAmount = calculateTotalAmount();

// //   const [shippingAddress, setShippingAddress] = useState({
// //     fullName: '',
// //     addressLine1: '',
// //     addressLine2: '',
// //     city: '',
// //     state: '',
// //     postalCode: '',
// //     country: 'India',
// //   });

// //   const [billingAddress, setBillingAddress] = useState({
// //     fullName: '',
// //     addressLine1: '',
// //     addressLine2: '',
// //     city: '',
// //     state: '',
// //     postalCode: '',
// //     country: 'India',
// //   });

// //   const [formSubmitted, setFormSubmitted] = useState({
// //     shipping: false,
// //     billing: false,
// //   });
// //   const [savedAddresses, setSavedAddresses] = useState([]);

// //   useEffect(() => {
// //     const fetchAddresses = async () => {
// //       try {
// //         const response = await axios.get(`/api/address/${userId}`);
// //         setSavedAddresses(response.data.addresses);
// //       } catch (error) {
// //         console.error('Error fetching addresses:', error);
// //         // Handle error appropriately
// //       }
// //     };

// //     if (userId) {
// //       fetchAddresses();
// //     }
// //   }, [userId]);
// //   const hasItemsInCart = cart.length > 0;
  

// //   const handleChange = (e, setAddress) => {
// //     setAddress({ ...setAddress, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e, addressType) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post(`/api/address`, {
// //         userId,
// //         addressType,
// //         ...(addressType === 'shipping' ? shippingAddress : billingAddress),
// //       });
// //       toast.success(`${addressType === 'shipping' ? 'Shipping' : 'Billing'} address saved successfully!`);
// //       // Clear the form fields
// //       if (addressType === 'shipping') {
// //         setShippingAddress({
// //           fullName: '',
// //           addressLine1: '',
// //           addressLine2: '',
// //           city: '',
// //           state: '',
// //           postalCode: '',
// //           country: 'India',
// //         });
// //         setFormSubmitted({ ...formSubmitted, shipping: true }); // Set shipping form submitted
// //       } else {
// //         setBillingAddress({
// //           fullName: '',
// //           addressLine1: '',
// //           addressLine2: '',
// //           city: '',
// //           state: '',
// //           postalCode: '',
// //           country: 'India',
// //         });
// //         setFormSubmitted({ ...formSubmitted, billing: true }); // Set billing form submitted
// //       }
// //     } catch (error) {
// //       console.error(`Error saving ${addressType} address:`, error);
// //       toast.error(`Failed to save ${addressType === 'shipping' ? 'shipping' : 'billing'} address.`);
// //     }
// //   };


  

// //   const handleDelete = async (addressId) => {
// //     try {
// //       const response = await axios.delete(`/api/address/${addressId}`);
// //       toast.success('Address deleted successfully!');
// //       // Refresh addresses or update state after successful deletion
// //     } catch (error) {
// //       console.error('Error deleting address:', error);
// //       toast.error('Failed to delete address.');
// //     }
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <div style={styles.section}>
// //         <h2>Shipping Address</h2>
// //         <form style={styles.form} onSubmit={(e) => handleSubmit(e, 'shipping')}>
// //           <label style={styles.label}>
// //             Full Name:
// //             <input
// //               style={styles.input}
// //               type="text"
// //               name="fullName"
// //               value={shippingAddress.fullName}
// //               onChange={(e) => handleChange(e, setShippingAddress)}
// //             />
// //           </label>
// //           <label style={styles.label}>
// //             Address Line 1:
// //             <input
// //               style={styles.input}
// //               type="text"
// //               name="addressLine1"
// //               value={shippingAddress.addressLine1}
// //               onChange={(e) => handleChange(e, setShippingAddress)}
// //             />
// //           </label>
// //           <label style={styles.label}>
// //             Address Line 2:
// //             <input
// //               style={styles.input}
// //               type="text"
// //               name="addressLine2"
// //               value={shippingAddress.addressLine2}
// //               onChange={(e) => handleChange(e, setShippingAddress)}
// //             />
// //           </label>
// //           <label style={styles.label}>
// //             City:
// //             <input
// //               style={styles.input}
// //               type="text"
// //               name="city"
// //               value={shippingAddress.city}
// //               onChange={(e) => handleChange(e, setShippingAddress)}
// //             />
// //           </label>
// //           <label style={styles.label}>
// //             State:
// //             <input
// //               style={styles.input}
// //               type="text"
// //               name="state"
// //               value={shippingAddress.state}
// //               onChange={(e) => handleChange(e, setShippingAddress)}
// //             />
// //           </label>
// //           <label style={styles.label}>
// //             Postal Code:
// //             <input
// //               style={styles.input}
// //               type="text"
// //               name="postalCode"
// //               value={shippingAddress.postalCode}
// //               onChange={(e) => handleChange(e, setShippingAddress)}
// //             />
// //           </label>
// //           <label style={styles.label}>
// //             Country:
// //             <input
// //               style={styles.input}
// //               type="text"
// //               name="country"
// //               value={shippingAddress.country}
// //               readOnly
// //             />
// //           </label>
// //           <button style={styles.button} type="submit">Save Shipping Address</button>
// //         </form>
// //       </div>

// //       <div style={styles.section}>
// //         <h2>Billing Address</h2>
// //         <form style={styles.form} onSubmit={(e) => handleSubmit(e, 'billing')}>
// //           <label style={styles.label}>
// //             Full Name:
// //             <input
// //               style={styles.input}
// //               type="text"
// //               name="fullName"
// //               value={billingAddress.fullName}
// //               onChange={(e) => handleChange(e, setBillingAddress)}
// //             />
// //           </label>
// //           <label style={styles.label}>
// //             Address Line 1:
// //             <input
// //               style={styles.input}
// //               type="text"
// //               name="addressLine1"
// //               value={billingAddress.addressLine1}
// //               onChange={(e) => handleChange(e, setBillingAddress)}
// //             />
// //           </label>
// //           <label style={styles.label}>
// //             Address Line 2:
// //             <input
// //               style={styles.input}
// //               type="text"
// //               name="addressLine2"
// //               value={billingAddress.addressLine2}
// //               onChange={(e) => handleChange(e, setBillingAddress)}
// //             />
// //           </label>
// //           <label style={styles.label}>
// //             City:
// //             <input
// //               style={styles.input}
// //               type="text"
// //               name="city"
// //               value={billingAddress.city}
// //               onChange={(e) => handleChange(e, setBillingAddress)}
// //             />
// //           </label>
// //           <label style={styles.label}>
// //   State:
// //   <input
// //     style={styles.input}
// //     type="text"
// //     name="state"
// //     value={billingAddress.state}
// //     onChange={(e) => handleChange(e, setBillingAddress)}
// //   />
// // </label>
// // <label style={styles.label}>
// //   Postal Code:
// //   <input
// //     style={styles.input}
// //     type="text"
// //     name="postalCode"
// //     value={billingAddress.postalCode}
// //     onChange={(e) => handleChange(e, setBillingAddress)}
// //   />
// // </label>
// // <label style={styles.label}>
// //   Country:
// //   <input
// //     style={styles.input}
// //     type="text"
// //     name="country"
// //     value={billingAddress.country}
// //     readOnly
// //   />
// // </label>
// // <button style={styles.button} type="submit">Save Billing Address</button>
// // </form>
// // </div>
// // {savedAddresses.map((address) => (
// //           <div key={address._id}>
// //             <p>Full Name: {address.fullName}</p>
// //             <p>Address Line 1: {address.addressLine1}</p>
// //             <p>Address Line 2: {address.addressLine2}</p>
// //             <p>City: {address.city}</p>
// //             <p>State: {address.state}</p>
// //             <p>Postal Code: {address.postalCode}</p>
// //             <p>Country: {address.country}</p>
// //             <button onClick={() => handleDelete(address._id)}>Delete Address</button>
// //           </div>
// //         ))}






// //   {/* <a href='Checkout'>Payment</a> */}
// //   {hasItemsInCart && (
// //           <Checkout totalAmount={calculateTotalAmount()} cartData={cart} userId={auth._id} />
// //         )}
  

// // {/* Additional code for displaying saved addresses and delete functionality */}

// // </div>
// // );
// // };

// // export default ShippingAddressForm;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useAuth } from '../auth/context/auth';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Checkout from './Checkout';
// import { useCart } from '../cart/CartContext'
// import { Link } from 'react-router-dom';

// const styles = {
//   container: {
//     maxWidth: '600px',
//     margin: '0 auto',
//     padding: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//   },
//   section: {
//     marginBottom: '20px',
//   },
//   form: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(2, 1fr)',
//     gap: '10px',
//   },
//   label: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   input: {
//     padding: '8px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//   },
//   button: {
//     padding: '8px 16px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
// };

// const ShippingAddressForm = () => {
//   const { auth } = useAuth();
//   const { cart, totalAmount } = useCart();
//   const userId = auth && auth.user ? auth.user._id : null;

//   console.log("totalamount",totalAmount)
//   console.log("cart",cart)

//   const [shippingAddress, setShippingAddress] = useState({
//     fullName: '',
//     addressLine1: '',
//     addressLine2: '',
//     city: '',
//     state: '',
//     postalCode: '',
//     country: 'India',
//   });
//   const [isAddressSubmitted, setIsAddressSubmitted] = useState(false);
//   const [billingAddress, setBillingAddress] = useState({
//     fullName: '',
//     addressLine1: '',
//     addressLine2: '',
//     city: '',
//     state: '',
//     postalCode: '',
//     country: 'India',
//   });

//   const handleChange = (e, setAddress, addressType) => {
//     const { name, value } = e.target;
//     setAddress(prevAddress => ({
//       ...prevAddress,
//       [name]: value,
//     }));
//   };
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`https://server-1-1gbu.onrender.com/api/address`, {
//         userId,
//         addressType: 'shipping', // Specify the addressType
//         ...shippingAddress, // Spread the shippingAddress object as addressData
//       });
//       console.log('Shipping address saved successfully!');
  
//       const billingResponse = await axios.post(`https://server-1-1gbu.onrender.com/api/address`, {
//         userId,
//         addressType: 'billing', // Specify the addressType
//         ...billingAddress, // Spread the billingAddress object as addressData
//       });
//       console.log('Billing address saved successfully!');
//       setIsAddressSubmitted(true); //
//       // Handle success response
//     } catch (error) {
//       console.error('Error saving addresses:', error);
//       // Handle error response
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.section}>
//         <h2>Shipping Address</h2>
//         <form style={styles.form}>
//           {/* Shipping Address Fields */}
//           {/* Full Name */}
//           <label style={styles.label}>
//             Full Name:
//             <input
//               style={styles.input}
//               type="text"
//               name="fullName"
//               value={shippingAddress.fullName}
//               onChange={(e) => handleChange(e, setShippingAddress)}
//             />
//           </label>
//           {/* Address Line 1 */}
//           <label style={styles.label}>
//             Address Line 1:
//             <input
//               style={styles.input}
//               type="text"
//               name="addressLine1"
//               value={shippingAddress.addressLine1}
//               onChange={(e) => handleChange(e, setShippingAddress)}
//             />
//           </label>
//           {/* Address Line 2 */}
//           <label style={styles.label}>
//             Address Line 2:
//             <input
//               style={styles.input}
//               type="text"
//               name="addressLine2"
//               value={shippingAddress.addressLine2}
//               onChange={(e) => handleChange(e, setShippingAddress)}
//             />
//           </label>
//           {/* City */}
//           <label style={styles.label}>
//             City:
//             <input
//               style={styles.input}
//               type="text"
//               name="city"
//               value={shippingAddress.city}
//               onChange={(e) => handleChange(e, setShippingAddress)}
//             />
//           </label>
//           {/* State */}
//           <label style={styles.label}>
//             State:
//             <input
//               style={styles.input}
//               type="text"
//               name="state"
//               value={shippingAddress.state}
//               onChange={(e) => handleChange(e, setShippingAddress)}
//             />
//           </label>
//           {/* Postal Code */}
//           <label style={styles.label}>
//             Postal Code:
//             <input
//               style={styles.input}
//               type="text"
//               name="postalCode"
//               value={shippingAddress.postalCode}
//               onChange={(e) => handleChange(e, setShippingAddress)}
//             />
//           </label>
//           {/* Country (Read-only) */}
//           <label style={styles.label}>
//             Country:
//             <input
//               style={styles.input}
//               type="text"
//               name="country"
//               value={shippingAddress.country}
//               readOnly
//             />
//           </label>
//         </form>
//       </div>

//       <div style={styles.section}>
//         <h2>Billing Address</h2>
//         <form style={styles.form}>
//           {/* Billing Address Fields */}
//           {/* Full Name */}
//           <label style={styles.label}>
//             Full Name:
//             <input
//               style={styles.input}
//               type="text"
//               name="fullName"
//               value={billingAddress.fullName}
//               onChange={(e) => handleChange(e, setBillingAddress)}
//             />
//           </label>
//           {/* Address Line 1 */}
//           <label style={styles.label}>
//             Address Line 1:
//             <input
//               style={styles.input}
//               type="text"
//               name="addressLine1"
//               value={billingAddress.addressLine1}
//               onChange={(e) => handleChange(e, setBillingAddress)}
//             />
//           </label>
//           {/* Address Line 2 */}
//           <label style={styles.label}>
//             Address Line 2:
//             <input
//               style={styles.input}
//               type="text"
//               name="addressLine2"
//               value={billingAddress.addressLine2}
//               onChange={(e) => handleChange(e, setBillingAddress)}
//             />
//           </label>
//           {/* City */}
//           <label style={styles.label}>
//             City:
//             <input
//               style={styles.input}
//               type="text"
//               name="city"
//               value={billingAddress.city}
//               onChange={(e) => handleChange(e, setBillingAddress)}
//             />
//           </label>
//           {/* State */}
//           <label style={styles.label}>
//             State:
//             <input
//               style={styles.input}
//               type="text"
//               name="state"
//               value={billingAddress.state}
//               onChange={(e) => handleChange(e, setBillingAddress)}
//             />
//           </label>
//           {/* Postal Code */}
//           <label style={styles.label}>
//             Postal Code:
//             <input
//               style={styles.input}
//               type="text"
//               name="postalCode"
//               value={billingAddress.postalCode}
//               onChange={(e) => handleChange(e, setBillingAddress)}
//             />
//           </label>
//           {/* Country (Read-only) */}
//           <label style={styles.label}>
//             Country:
//             <input
//               style={styles.input}
//               type="text"
//               name="country"
//               value={billingAddress.country}
//               readOnly
//             />
//           </label>
//         </form>
//       </div>

//       {/* Button to Save Both Addresses */}
//       <button style={styles.button} onClick={handleSubmit}>
//         Save Addresses
//      </button>

//      {/* Checkout Component */}
//      {isAddressSubmitted && cart.length > 0 && (
//         <Checkout totalAmount={totalAmount} cartData={cart} userId={auth._id}  shippingAddress={shippingAddress}
//         billingAddress={billingAddress} />
//       )}
//    </div>
//  );
// };

// export default ShippingAddressForm;




import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../auth/context/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from './Checkout';
import { useCart } from '../cart/CartContext';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  section: {
    marginBottom: '20px',
  },
  form: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

const ShippingAddressForm = () => {
  const { auth } = useAuth();
  const { cart, totalAmount } = useCart();
  const userId = auth && auth.user ? auth.user._id : null;

  console.log("totalamount", totalAmount);
  console.log("cart", cart);

  const [shippingAddress, setShippingAddress] = useState({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'India',
  });
  const [isAddressSubmitted, setIsAddressSubmitted] = useState(false);
  const [billingAddress, setBillingAddress] = useState({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'India',
  });

  const handleChange = (e, setAddress) => {
    const { name, value } = e.target;
    setAddress(prevAddress => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://server-1-1gbu.onrender.com/api/address`, {
        userId,
        addressType: 'shipping',
        ...shippingAddress,
      });
      console.log('Shipping address saved successfully!');

      const billingResponse = await axios.post(`https://server-1-1gbu.onrender.com/api/address`, {
        userId,
        addressType: 'billing',
        ...billingAddress,
      });
      console.log('Billing address saved successfully!');
      setIsAddressSubmitted(true);
    } catch (error) {
      console.error('Error saving addresses:', error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.section}>
        <h2>Shipping Address</h2>
        <form style={styles.form}>
          <label style={styles.label}>
            Full Name:
            <input
              style={styles.input}
              type="text"
              name="fullName"
              value={shippingAddress.fullName}
              onChange={(e) => handleChange(e, setShippingAddress)}
            />
          </label>
          <label style={styles.label}>
            Address Line 1:
            <input
              style={styles.input}
              type="text"
              name="addressLine1"
              value={shippingAddress.addressLine1}
              onChange={(e) => handleChange(e, setShippingAddress)}
            />
          </label>
          <label style={styles.label}>
            Address Line 2:
            <input
              style={styles.input}
              type="text"
              name="addressLine2"
              value={shippingAddress.addressLine2}
              onChange={(e) => handleChange(e, setShippingAddress)}
            />
          </label>
          <label style={styles.label}>
            City:
            <input
              style={styles.input}
              type="text"
              name="city"
              value={shippingAddress.city}
              onChange={(e) => handleChange(e, setShippingAddress)}
            />
          </label>
          <label style={styles.label}>
            State:
            <input
              style={styles.input}
              type="text"
              name="state"
              value={shippingAddress.state}
              onChange={(e) => handleChange(e, setShippingAddress)}
            />
          </label>
          <label style={styles.label}>
            Postal Code:
            <input
              style={styles.input}
              type="text"
              name="postalCode"
              value={shippingAddress.postalCode}
              onChange={(e) => handleChange(e, setShippingAddress)}
            />
          </label>
          <label style={styles.label}>
            Country:
            <input
              style={styles.input}
              type="text"
              name="country"
              value={shippingAddress.country}
              readOnly
            />
          </label>
        </form>
      </div>

      <div style={styles.section}>
        <h2>Billing Address</h2>
        <form style={styles.form}>
          <label style={styles.label}>
            Full Name:
            <input
              style={styles.input}
              type="text"
              name="fullName"
              value={billingAddress.fullName}
              onChange={(e) => handleChange(e, setBillingAddress)}
            />
          </label>
          <label style={styles.label}>
            Address Line 1:
            <input
              style={styles.input}
              type="text"
              name="addressLine1"
              value={billingAddress.addressLine1}
              onChange={(e) => handleChange(e, setBillingAddress)}
            />
          </label>
          <label style={styles.label}>
            Address Line 2:
            <input
              style={styles.input}
              type="text"
              name="addressLine2"
              value={billingAddress.addressLine2}
              onChange={(e) => handleChange(e, setBillingAddress)}
            />
          </label>
          <label style={styles.label}>
            City:
            <input
              style={styles.input}
              type="text"
              name="city"
              value={billingAddress.city}
              onChange={(e) => handleChange(e, setBillingAddress)}
            />
          </label>
          <label style={styles.label}>
            State:
            <input
              style={styles.input}
              type="text"
              name="state"
              value={billingAddress.state}
              onChange={(e) => handleChange(e, setBillingAddress)}
            />
          </label>
          <label style={styles.label}>
            Postal Code:
            <input
              style={styles.input}
              type="text"
              name="postalCode"
              value={billingAddress.postalCode}
              onChange={(e) => handleChange(e, setBillingAddress)}
            />
          </label>
          <label style={styles.label}>
            Country:
            <input
              style={styles.input}
              type="text"
              name="country"
              value={billingAddress.country}
              readOnly
            />
          </label>
        </form>
      </div>

      <button style={styles.button} onClick={handleSubmit}>
        Save Addresses
      </button>

      {isAddressSubmitted && cart.length > 0 && (
        <Checkout
          totalAmount={totalAmount}
          cartData={cart}
          userId={userId}
          shippingAddress={shippingAddress}
          billingAddress={billingAddress}
        />
      )}
    </div>
  );
};

export default ShippingAddressForm;
