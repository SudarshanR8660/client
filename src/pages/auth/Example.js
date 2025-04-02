import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const { userAuthenticated } = useWishlist();
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Check local storage for user information
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    // ... (your existing code)

    return (
        <div>
            {userAuthenticated ? (
                <div>
                    {/* Display user's name from the state or local storage */}
                    <p>Welcome, {user && user.name}</p>
                    {/* ... (other navbar content) */}
                </div>
            ) : (
               <Link to='/login'>Login</Link>
            )}
        </div>
    );
};

export default Navbar;

