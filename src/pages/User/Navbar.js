import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    // Your logout logic here (e.g., clearing user data from local storage, updating authentication state)
    setIsLoggedIn(false);
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div style={styles.navbar}>
      <div style={styles.navItem} >
        <Link to='/wishlist'>Wishlist</Link>
    </div>
      <div style={styles.navItem}>Cart</div>
      <div style={styles.navItem}>Profile Edit</div>
      {isLoggedIn ? (
        <div style={styles.navItem} onClick={handleLogout}>
          Logout
        </div>
      ) : null}
    </div>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#333',
    padding: '10px',
    color: '#fff',
  },
  navItem: {
    cursor: 'pointer',
    margin: '0 10px',
  },
};

export default Navbar;

;

