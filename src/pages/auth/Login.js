




import { useState,useEffect } from "react";
import styles from "./auth.module.scss";
import loginImg from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Card from "../../components/card/Card";
import axios from 'axios'
import { useAuth } from '../auth/context/auth';

import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { auth, login } = useAuth();  // Destructure the auth object

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:4242/api/v1/auth/login`, {
        email,
        password,
      });
  
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        login({  // Update the user information using the login function
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem('auth', JSON.stringify(res.data));
  
        // Log the auth object to the console
        console.log('Authentication State:', auth);
  
        if (email === 'testuser5@gmail.com') {
          navigate('/admin/*');
        } else {
          navigate('/UserDashboard');
        }
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };
  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const response = await axios.get("/api/current-user-email");
        setEmail(response.data.email);
      } catch (error) {
        console.error("Error fetching user email", error);
      }
    };

    fetchUserEmail(); // Trigger the fetch operation
  }, []); 

  return (
    <>
      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={loginImg} alt="Login" width="400" />
        </div>

        <Card>
          <div className={styles.form}>
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
                Login
              </button>
              <div className={styles.links}>
                <Link to="/reset">Reset Password</Link>
              </div>
              <p>-- or --</p>
            </form>
            <button
              className="--btn --btn-danger --btn-block"
            >
              <FaGoogle color="#fff" /> Login With Google
            </button>
            <span className={styles.register}>
              <p>Don't have an account?</p>
              <Link to="/register">Register</Link>
            </span>
          </div>
        </Card>
      </section>
    </>
  );
}

export default Login;

