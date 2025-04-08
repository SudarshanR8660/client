




// import { useState,useEffect } from "react";
// import styles from "./auth.module.scss";
// import loginImg from "../../assets/login.png";
// import { Link, useNavigate } from "react-router-dom";
// import { FaGoogle } from "react-icons/fa";
// import Card from "../../components/card/Card";
// import axios from 'axios'
// import { useAuth } from '../auth/context/auth';

// import { toast } from "react-toastify";
// import Loader from "../../components/loader/Loader";

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const { auth, login } = useAuth();  // Destructure the auth object

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(`https://server-1-1gbu.onrender.com/api/v1/auth/login`, {
//         email,
//         password,
//       });
  
//       if (res && res.data.success) {
//         toast.success(res.data && res.data.message);
//         login({  // Update the user information using the login function
//           user: res.data.user,
//           token: res.data.token,
//         });
//         localStorage.setItem('auth', JSON.stringify(res.data));
  
//         // Log the auth object to the console
//         console.log('Authentication State:', auth);
  
//         if (email === 'testuser5@gmail.com') {
//           navigate('/admin/*');
//         } else {
//           navigate('/UserDashboard');
//         }
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error('Something went wrong');
//     }
//   };
//   useEffect(() => {
//     const fetchUserEmail = async () => {
//       try {
//         const response = await axios.get("/api/current-user-email");
//         setEmail(response.data.email);
//       } catch (error) {
//         console.error("Error fetching user email", error);
//       }
//     };

//     fetchUserEmail(); // Trigger the fetch operation
//   }, []); 

//   return (
//     <>
//       <section className={`container ${styles.auth}`}>
//         <div className={styles.img}>
//           <img src={loginImg} alt="Login" width="400" />
//         </div>

//         <Card>
//           <div className={styles.form}>
//             <h2>Login</h2>

//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 placeholder="Email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button type="submit" className="--btn --btn-primary --btn-block">
//                 Login
//               </button>
//               <div className={styles.links}>
//                 <Link to="/reset">Reset Password</Link>
//               </div>
//               <p>-- or --</p>
//             </form>
//             <button
//               className="--btn --btn-danger --btn-block"
//             >
//               <FaGoogle color="#fff" /> Login With Google
//             </button>
//             <span className={styles.register}>
//               <p>Don't have an account?</p>
//               <Link to="/register">Register</Link>
//             </span>
//           </div>
//         </Card>
//       </section>
//     </>
//   );
// }

// export default Login;

import { useState, useEffect } from "react";
import loginImg from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import axios from 'axios';
import { useAuth } from '../auth/context/auth';
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { auth, login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://server-1-1gbu.onrender.com/api/v1/auth/login`, {
        email,
        password,
      });

      if (res && res.data.success) {
        toast.success(res.data.message);
        login({
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem('auth', JSON.stringify(res.data));

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
    fetchUserEmail();
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      {/* Internal CSS */}
      <style>{`
        .auth-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 3rem;
          padding: 4rem 2rem;
          max-width: 1200px;
          margin: auto;
        }

        .auth-img img {
          max-width: 100%;
          height: auto;
        }

        .auth-form {
          width: 100%;
          max-width: 400px;
          background-color: #ffffff;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .auth-form h2 {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .auth-form input {
          width: 100%;
          padding: 0.75rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 1rem;
        }

        .auth-form button {
          width: 100%;
          padding: 0.75rem;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .auth-form button:hover {
          background-color: #0056b3;
        }

        .google-login {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1rem;
          background-color: #db4437;
        }

        .auth-form .links {
          text-align: right;
          margin-top: -0.5rem;
          margin-bottom: 1rem;
        }

        .auth-form .links a {
          font-size: 0.9rem;
          color: #007bff;
          text-decoration: none;
        }

        .auth-form .links a:hover {
          text-decoration: underline;
        }

        .auth-form span {
          display: block;
          text-align: center;
          margin-top: 1rem;
        }

        .auth-form span a {
          color: #007bff;
          font-weight: bold;
          text-decoration: none;
        }

        .auth-form span a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .auth-container {
            flex-direction: column;
          }

          .auth-img img {
            width: 300px;
            margin: auto;
          }
        }
      `}</style>

      <section className="auth-container">
        <div className="auth-img">
          <img src={loginImg} alt="Login" />
        </div>

        <div className="auth-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
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
            {/* <div className="links">
              <Link to="/reset">Reset Password</Link>
            </div> */}
            <button type="submit">Login</button>
          </form>

          {/* <p style={{ textAlign: 'center', margin: '1rem 0' }}>-- or --</p> */}

          {/* <button className="google-login">
            <FaGoogle color="#fff" /> Login With Google
          </button> */}

          <span>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Login;
