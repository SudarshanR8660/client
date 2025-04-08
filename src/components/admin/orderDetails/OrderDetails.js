


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const OrderDetailsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const OrderTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
`;

const OrderInfo = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const ProductList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ProductItem = styled.li`
  background-color: #e9e9e9;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const StatusUpdateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const StatusSelect = styled.select`
  margin-right: 10px;
  padding: 5px;
`;

const UpdateButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #0056b3;
  }
`;

function OrderDetails() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [updatedStatus, setUpdatedStatus] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const navigate=useNavigate()

  useEffect(() => {
    async function fetchOrderDetails() {
      try {
        const response = await axios.get(`https://server-1-1gbu.onrender.com/api/orders/${orderId}`);
        setOrder(response.data.order);
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    }

    fetchOrderDetails();
  }, [orderId]);

  const handleStatusUpdate = async () => {
    if (!updatedStatus) return;
    try {
      setIsUpdating(true);
      await axios.put(`https://server-1-1gbu.onrender.com/api/orders/${orderId}`, { orderStatus: updatedStatus });
      const response = await axios.get(`https://server-1-1gbu.onrender.com/api/orders/${orderId}`);
      setOrder(response.data.order);
      navigate('/Orders')
      
      setIsUpdating(false);
    } catch (error) {
      console.error('Error updating order status:', error);
      setIsUpdating(false);
    }
  };

  if (!order) {
    return <p>Loading...</p>;
  }

  return (
    <OrderDetailsContainer>
      <OrderTitle>Order Details</OrderTitle>
      <OrderInfo>
        <p>
          <strong>Order ID:</strong> {order._id}
        </p>
        <p>
          <strong>Total Price:</strong> {order.price}
        </p>
        <p>
          <strong>Order Status:</strong> {order.orderStatus || 'Pending'}
        </p>
        <p>
          <strong>Order Date:</strong> {new Date(order.createdAt).toLocaleDateString()}
        </p>
      </OrderInfo>
      <h3>Products:</h3>
      <ProductList>
        {order.orderProducts.map((product) => (
          <ProductItem key={product.productId}>
            <p>
              <strong>Name:</strong> {product.name}
            </p>
            <p>
              <strong>Price:</strong> {product.price}
            </p>
            {/* Add other product details as needed */}
          </ProductItem>
        ))}
      </ProductList>
      <StatusUpdateContainer>
        <label htmlFor="status">Update Status:</label>
        <StatusSelect id="status" value={updatedStatus} onChange={(e) => setUpdatedStatus(e.target.value)}>
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="Processing">Processing</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
        </StatusSelect>
        <UpdateButton onClick={handleStatusUpdate} disabled={!updatedStatus || isUpdating}>
          {isUpdating ? 'Updating...' : 'Update Status'}
        </UpdateButton>
      </StatusUpdateContainer>
    </OrderDetailsContainer>
  );
}

export default OrderDetails;