



// CheckoutSuccess.js
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const CheckoutSuccess = () => {
  const location = useLocation();
  const { orderId } = location.state || {};
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchOrderDetails = async () => {
  //     try {
  //       if (!orderId) {
  //         throw new Error('Order ID is not provided');
  //       }
  //       const response = await fetch(`https://server-1-1gbu.onrender.com/api/orders/${orderId}`);
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch order details');
  //       }
  //       const data = await response.json();
  //       setOrder(data);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchOrderDetails();
  // }, [orderId]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <section>
      <div className="container">
        <h2>Checkout Successful</h2>
        <p>Thank you for your purchase</p>
        <p>Your order ID is: {orderId}</p>
        <br />
        {/* <button className="--btn --btn-primary">
          <Link to={`/UserOrder/${orderId}`}>View Order Status</Link>
        </button> */}
      </div>
    </section>
  );
};

export default CheckoutSuccess;
