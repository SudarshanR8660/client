// import React, { useEffect } from "react";
// import InfoBox from "../../infoBox/InfoBox";
// import styles from "./Home.module.scss";
// import { AiFillDollarCircle } from "react-icons/ai";
// import { BsCart4 } from "react-icons/bs";
// import { FaCartArrowDown } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   selectProducts,
//   STORE_PRODUCTS,
// } from "../../../redux/slice/productSlice";
// import {
//   CALC_TOTAL_ORDER_AMOUNT,
//   selectOrderHistory,
//   selectTotalOrderAmount,
//   STORE_ORDERS,
// } from "../../../redux/slice/orderSlice";
// import useFetchCollection from "../../../customHooks/useFetchCollection";
// import Chart from "../../chart/Chart";

// //Icons
// const earningIcon = <AiFillDollarCircle size={30} color="#b624ff" />;
// const productIcon = <BsCart4 size={30} color="#1f93ff" />;
// const ordersIcon = <FaCartArrowDown size={30} color="orangered" />;

// const Home = () => {
//   const products = useSelector(selectProducts);
//   const orders = useSelector(selectOrderHistory);
//   const totalOrderAmount = useSelector(selectTotalOrderAmount);

//   const fbProducts = useFetchCollection("products");
//   const { data } = useFetchCollection("orders");

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(
//       STORE_PRODUCTS({
//         products: fbProducts.data,
//       })
//     );

//     dispatch(STORE_ORDERS(data));

//     dispatch(CALC_TOTAL_ORDER_AMOUNT());
//   }, [dispatch, data, fbProducts]);

//   return (
//     <div className={styles.home}>
//       <h2>Admin Home</h2>
//       <div className={styles["info-box"]}>
//         <InfoBox
//           cardClass={`${styles.card} ${styles.card1}`}
//           title={"Earnings"}
//           count={`₹${totalOrderAmount}`}
//           icon={earningIcon}
//         />
//         <InfoBox
//           cardClass={`${styles.card} ${styles.card2}`}
//           title={"Products"}
//           count={products.length}
//           icon={productIcon}
//         />
//         <InfoBox
//           cardClass={`${styles.card} ${styles.card3}`}
//           title={"Orders"}
//           count={orders.length}
//           icon={ordersIcon}
//         />
//       </div>
//       <div>
//         <Chart />
//       </div>
//     </div>
//   );
// };

// // import React, { useEffect } from "react";
// // import styles from "./Home.module.scss";
// // const Home = () => {
  

// //   return (
// //     <div className={styles.home}>
// //       <h2>Admin Home</h2>
      
// //     </div>
// //   );
// // };
// // import React, { useEffect } from "react";
// // import InfoBox from "../../infoBox/InfoBox";
// // import styles from "./Home.module.scss";
// // import { AiFillDollarCircle } from "react-icons/ai";
// // import { BsCart4 } from "react-icons/bs";
// // import { FaCartArrowDown } from "react-icons/fa";
// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //   selectProducts,
// //   STORE_PRODUCTS,
// // } from "../../../redux/slice/productSlice";
// // import {
// //   CALC_TOTAL_ORDER_AMOUNT,
// //   selectOrderHistory,
// //   selectTotalOrderAmount,
// //   STORE_ORDERS,
// // } from "../../../redux/slice/orderSlice";
// // import useFetchCollection from "../../../customHooks/useFetchCollection";
// // import Chart from "../../chart/Chart";

// // //Icons
// // const earningIcon = <AiFillDollarCircle size={30} color="#b624ff" />;
// // const productIcon = <BsCart4 size={30} color="#1f93ff" />;
// // const ordersIcon = <FaCartArrowDown size={30} color="orangered" />;

// // const Home = () => {
// //   const products = useSelector(selectProducts);
// //   const orders = useSelector(selectOrderHistory);
// //   const totalOrderAmount = useSelector(selectTotalOrderAmount);

// //   const fbProducts = useFetchCollection("products");
// //   const { data } = useFetchCollection("orders");

// //   const dispatch = useDispatch();
// //   useEffect(() => {
// //     dispatch(
// //       STORE_PRODUCTS({
// //         products: fbProducts.data,
// //       })
// //     );

// //     dispatch(STORE_ORDERS(data));

// //     dispatch(CALC_TOTAL_ORDER_AMOUNT());
// //   }, [dispatch, data, fbProducts]);

// //   return (
// //     <div className={styles.home}>
// //       <h2>Admin Home</h2>
// //       <div className={styles["info-box"]}>
// //         <InfoBox
// //           cardClass={`${styles.card} ${styles.card1}`}
// //           title={"Earnings"}
// //           count={`$${totalOrderAmount}`}
// //           icon={earningIcon}
// //         />
// //         <InfoBox
// //           cardClass={`${styles.card} ${styles.card2}`}
// //           title={"Products"}
// //           count={products.length}
// //           icon={productIcon}
// //         />
// //         <InfoBox
// //           cardClass={`${styles.card} ${styles.card3}`}
// //           title={"Orders"}
// //           count={orders.length}
// //           icon={ordersIcon}
// //         />
// //       </div>
// //       <div>
// //         <Chart />
// //       </div>
// //     </div>
// //   );
// // };

// export default Home;


// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

function Dashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    recentOrders: [],
    topProducts: [],
    categoryDistribution: [],
    orderStatusDistribution: [],
    monthlyRevenue: []
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        // Replace with your actual backend URL
        const response = await axios.get('http://localhost:4242/api/dashboard/stats');
        setStats(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load dashboard data');
        setLoading(false);
        console.error('Dashboard data fetch error:', err);
      }
    };

    fetchDashboardData();
    
    // Refresh data every 5 minutes
    const intervalId = setInterval(fetchDashboardData, 300000);
    
    return () => clearInterval(intervalId);
  }, []);

  // Helper function to get status color
  const getStatusColor = (status) => {
    switch(status) {
      case 'Delivered': return 'status-delivered';
      case 'Shipped': return 'status-shipped';
      case 'Processing': return 'status-processing';
      default: return 'status-pending';
    }
  };

  // Function to create simple bar chart
  const renderBarChart = (data, maxValue) => {
    return (
      <div className="bar-chart">
        {data.map((item, index) => (
          <div key={index} className="bar-item">
            <div className="bar-label">{item.month}</div>
            <div className="bar-container">
              <div 
                className="bar" 
                style={{ width: `${(item.revenue / maxValue) * 100}%` }}
              ></div>
            </div>
            <div className="bar-value">₹{item.revenue}</div>
          </div>
        ))}
      </div>
    );
  };

  // Function to create simple pie chart
  const renderPieChart = (data) => {
    const total = data.reduce((sum, item) => sum + item.count, 0);
    let startAngle = 0;
    
    return (
      <div className="pie-chart-container">
        <div className="pie-chart">
          {data.map((item, index) => {
            const percentage = (item.count / total) * 100;
            const degrees = (percentage / 100) * 360;
            const oldStartAngle = startAngle;
            startAngle += degrees;
            
            const pieStyle = {
              '--start-angle': `${oldStartAngle}deg`,
              '--end-angle': `${startAngle}deg`,
              '--color': `hsl(${index * 60}, 70%, 60%)`,
            };
            
            return (
              <div key={index} className="pie-segment" style={pieStyle}></div>
            );
          })}
        </div>
        <div className="pie-legend">
          {data.map((item, index) => (
            <div key={index} className="legend-item">
              <div className="legend-color" style={{ backgroundColor: `hsl(${index * 60}, 70%, 60%)` }}></div>
              <div className="legend-label">
                {item.category || item.status}: {Math.round((item.count / total) * 100)}%
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  if (loading) return (
    <div className="loading">
      <div className="spinner"></div>
      <p>Loading dashboard data...</p>
    </div>
  );

  if (error) return (
    <div className="error-container">
      <div className="error-message">{error}</div>
    </div>
  );

  // Get max revenue for chart scaling
  const maxRevenue = stats.monthlyRevenue.length > 0 
    ? Math.max(...stats.monthlyRevenue.map(item => item.revenue))
    : 0;

  return (
    <div className="dashboard">
      <header className="header">
        <h1>E-commerce Dashboard</h1>
      </header>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon products-icon">
            <i className="fas fa-box"></i>
          </div>
          <div className="stat-content">
            <h2>Total Products</h2>
            <p className="stat-number">{stats.totalProducts}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orders-icon">
            <i className="fas fa-shopping-cart"></i>
          </div>
          <div className="stat-content">
            <h2>Total Orders</h2>
            <p className="stat-number">{stats.totalOrders}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon revenue-icon">
            <i className="fas fa-dollar-sign"></i>
          </div>
          <div className="stat-content">
            <h2>Total Revenue</h2>
            <p className="stat-number">₹{stats.totalRevenue.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="charts-row">
        <div className="chart-card">
          <h2>Monthly Revenue</h2>
          {stats.monthlyRevenue.length > 0 ? (
            renderBarChart(stats.monthlyRevenue, maxRevenue)
          ) : (
            <p>No monthly revenue data available</p>
          )}
        </div>

        <div className="chart-card">
          <h2>Category Distribution</h2>
          {stats.categoryDistribution.length > 0 ? (
            renderPieChart(stats.categoryDistribution)
          ) : (
            <p>No category data available</p>
          )}
        </div>
      </div>

      <div className="table-section">
        <h2>Recent Orders</h2>
        {stats.recentOrders.length > 0 ? (
          <div className="table-container">
            <table className="orders-table">
              <thead>
                <tr>
                  {/* <th>Customer</th> */}
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {stats.recentOrders.map((order) => (
                  <tr key={order._id}>
                    {/* <td>{order.name}</td> */}
                    <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                    <td>₹{order.price}</td>
                    <td>
                      <span className={`status-badge ${getStatusColor(order.orderStatus)}`}>
                        {order.orderStatus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No recent orders available</p>
        )}
      </div>

      <div className="products-section">
        <h2>Top Selling Products</h2>
        {stats.topProducts.length > 0 ? (
          <div className="top-products">
            {stats.topProducts.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-rank">{index + 1}</div>
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p>{product.count} sold</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No top products data available</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;