




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const OrdersContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const OrderTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
`;

const OrderList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const OrderItem = styled.li`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const OrderDetails = styled.div`
  margin-bottom: 10px;
`;

const OrderLink = styled(Link)`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from the backend when the component mounts
    async function fetchOrders() {
      try {
        const response = await axios.get('http://localhost:4242/orders');
        setOrders(response.data.orders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    }

    fetchOrders();
  }, []);

  return (
    <OrdersContainer>
      <OrderTitle>Orders</OrderTitle>
      <OrderList>
        {orders.map((order) => (
          <OrderItem key={order._id}>
            <OrderDetails>
              <strong>Order ID:</strong> {order._id}
            </OrderDetails>
            <OrderDetails>
              <strong>Total Price:</strong> {order.price}
            </OrderDetails>
            <OrderLink to={`/OrderDetails/${order._id}`}>
              <OrderDetails>
                <strong>Order Status:</strong> {order.orderStatus || 'Pending'}
              </OrderDetails>
            </OrderLink>
            <OrderDetails>
              <strong>Order Date:</strong>{' '}
              {new Date(order.createdAt).toLocaleDateString()}
            </OrderDetails>
            <hr />
          </OrderItem>
        ))}
      </OrderList>
    </OrdersContainer>
  );
}

export default Orders;