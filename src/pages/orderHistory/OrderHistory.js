


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useAuth } from '../../pages/auth/context/auth';

// const UserOrderDetails = () => {
//   const { auth } = useAuth();
//   const userId = auth?.user?._id;  // Assuming you pass userId as a parameter
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get(`https://server-1-1gbu.onrender.com/api/users/${userId}/orders`);
//         setOrders(response.data.orders);
//       } catch (err) {
//         setError('An error occurred while fetching orders');
//         console.error('Error fetching orders:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [userId]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (orders.length === 0) {
//     return <div>No orders found</div>;
//   }

//   return (
//     <div>
//       <h2>User Orders</h2>
//       {orders.map(order => (
//         <div key={order._id}>
//           <h3>Order ID: {order._id}</h3>
//           <p>Total Price: ${order.price / 100}</p>
//           <p>Order Status: {order.orderStatus}</p>
//           {/* Display other order details */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default UserOrderDetails;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../pages/auth/context/auth';

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f7f7f7',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  },
  orderItem: {
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  orderId: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  orderDetails: {
    fontSize: '16px',
    marginBottom: '10px',
  },
};

const UserOrderDetails = () => {
  const { auth } = useAuth();
  const userId = auth?.user?._id;
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`https://server-1-1gbu.onrender.com/api/users/${userId}/orders`);
        setOrders(response.data.orders);
      } catch (err) {
        setError('An error occurred while fetching orders');
        console.error('Error fetching orders:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (orders.length === 0) {
    return <div>No orders found</div>;
  }

  return (


    <div class="mt-6 flow-root sm:mt-8 container mx-auto p-4" >
    <div class="divide-y divide-gray-200 dark:divide-gray-700">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">User Orders</h2>
    {orders.map(order => (<div class="flex flex-wrap items-center gap-y-4 py-6" key={order._id}>
            <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
              <dt class="text-base font-medium text-gray-500 dark:text-gray-400">Order ID:</dt>
              <dd class="mt-1.5 text-base font-semibold text-gray-900 dark:text-black">
                <a href="#" class="hover:underline">{order._id}</a>
              </dd>
            </dl>

            <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
              <dt class="text-base font-medium text-gray-500 dark:text-gray-400">Date:</dt>
              <dd class="mt-1.5 text-base font-semibold text-gray-900 dark:text-black">{new Date(order.createdAt).toLocaleString()}
              </dd>
            </dl>

            <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
              <dt class="text-base font-medium text-gray-500 dark:text-gray-400">Price:</dt>
              <dd class="mt-1.5 text-base font-semibold text-gray-900 dark:text-black">₹{order.price}</dd>
            </dl>

            <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
              <dt class="text-base font-medium text-gray-500 dark:text-gray-400">Status:</dt>
              <dd class="me-2 mt-1.5 inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                <svg class="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.5 4h-13m13 16h-13M8 20v-3.333a2 2 0 0 1 .4-1.2L10 12.6a1 1 0 0 0 0-1.2L8.4 8.533a2 2 0 0 1-.4-1.2V4h8v3.333a2 2 0 0 1-.4 1.2L13.957 11.4a1 1 0 0 0 0 1.2l1.643 2.867a2 2 0 0 1 .4 1.2V20H8Z" />
                </svg>
                {order.orderStatus}
              </dd>
            </dl>

            {/* <div class="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
              <button type="button" class="w-full rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900 lg:w-auto">Cancel order</button>
              <a href="#" class="w-full inline-flex justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 lg:w-auto">View details</a>
            </div> */}
          </div>
          ))}
      </div>
      </div>

  );
};

export default UserOrderDetails;

