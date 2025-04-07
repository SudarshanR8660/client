// Header.js

import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { FaShoppingCart, FaTimes, FaUserCircle } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { useAuth } from '../../pages/auth/context/auth';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../../redux/slice/authSlice';
import ShowOnLogin, { ShowOnLogout } from '../hiddenLink/hiddenLink';
import AdminOnlyRoute, { AdminOnlyLink } from '../adminOnlyRoute/AdminOnlyRoute';
import { CALCULATE_TOTAL_QUANTITY, selectCartTotalQuantity } from '../../redux/slice/cartSlice';
const logo = (
  <div className={styles.logo}>
    
    <Link to="/">
      <h2>
        Flare<span>Max</span>
      </h2>
    </Link>
  </div>
);
 const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [scrollPage, setScrollPage] = useState(false);
  const cartTotalQuantity = useSelector(selectCartTotalQuantity);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth, logout } = useAuth();

  useEffect(() => {
    const user = auth && auth.user;
    if (user) {
      const uName = `Welcome ${user.name || user.username || ''}`;
      setDisplayName(uName);

      dispatch(
        SET_ACTIVE_USER({
          email: user.email,
          userName: user.name || user.username,
          userID: user.id,
        })
      );
    } else {
      setDisplayName('');
      dispatch(REMOVE_ACTIVE_USER());
    }
  }, [dispatch, auth]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const handleLogout = () => {
    logout();
    toast.success('Logout successfully.');
    navigate('/');
  };

  return (
    
    <header className={`bg-gray-900 text-white ${showMenu ? 'fixed top-0 left-0 w-full z-10' : ''}`}>
    <div className="flex items-center p-4">
      <button onClick={toggleMenu} className="text-white text-2xl md:hidden">
        <HiOutlineMenuAlt3 />
      </button>
      <Link to="/" className="text-2xl font-bold">
        Flare<span className="text-blue-500">Max</span>
      </Link>
      
      <nav className={`md:flex ${showMenu ? 'block' : 'hidden'}`}>
        <ul className="space-y-4 md:space-y-0 md:flex md:space-x-6">
          <li>
            <AdminOnlyLink>
              <Link to="/admin/home" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">Admin</Link>
            </AdminOnlyLink>
          </li>
          <li>
            <NavLink to="/" className="hover:text-blue-500">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-blue-500">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <div className="flex items-center space-x-4">
        <ShowOnLogout>
          <NavLink to="/login" className="hover:text-blue-500">Login</NavLink>
        </ShowOnLogout>

        <ShowOnLogin style={{marginLeft:'200px'}}>
          <a href="/" className="flex items-center text-blue-500" style={{marginRight:'20px'}}>
            <FaUserCircle size={20} />
            <span className="ml-2" style={{width:'150px'}}>Hi, {displayName}</span>
          </a>
        </ShowOnLogin>

        <ShowOnLogin>
          <NavLink to="/wishlist" className="hover:text-blue-500" style={{marginRight:'30px'}}>Wishlist</NavLink>
        </ShowOnLogin>

        <ShowOnLogin>
          <NavLink to="/OrderHistory/users/:userId/orders" className="hover:text-blue-500"> Orders</NavLink>
        </ShowOnLogin>

        <ShowOnLogin>
          <NavLink to="/cart" className="hover:text-blue-500">
            <FaShoppingCart size={20} />
            {/* <span>{cartTotalQuantity}</span> */}
          </NavLink>
        </ShowOnLogin>

        <ShowOnLogin>
          <NavLink to="/" onClick={handleLogout} className="hover:text-blue-500">Logout</NavLink>
        </ShowOnLogin>
      </div>
    </div>

    {/* Mobile menu */}
    <div className={`md:hidden ${showMenu ? 'block' : 'hidden'} bg-gray-900 text-white p-4`}>
      <ul className="space-y-4">
        <li>
          <AdminOnlyLink>
            <Link to="/admin/home" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">Admin</Link>
          </AdminOnlyLink>
        </li>
        <li>
          <NavLink to="/" className="hover:text-blue-500">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="hover:text-blue-500">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/login" className="hover:text-blue-500">Login</NavLink>
        </li>
      </ul>
    </div>
  </header>
        );
      };


export default Header;

