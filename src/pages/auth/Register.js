
// import styles from "./auth.module.scss";
// import registerImg from "../../assets/register.png";
// import Card from "../../components/card/Card";

// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { useContext, useEffect, useState } from 'react';



// import { toast } from "react-toastify";
// import axios from 'axios';

// const Register = () => {




// const[name,setName]=useState('')
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [ cpassword, setcPassword] = useState(''); 


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         `https://server-1-1gbu.onrender.com/api/v1/auth/register`,
//         {
//          name,
//           email,
//           password,
//            cpassword
          
//         }
//       );
//       if (res.data.success) {
//         toast.success(res.data.message);
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (error) {
//       toast.error("something wrong");
//     }
//   }
    
//   return (
    
//  <div>
// <section className={`container ${styles.auth}`}>
//         <div>
//           <h2>Register</h2>

//           <form onSubmit={handleSubmit}>
//           <input
//               type="text"
//               placeholder="Name"
//               required
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               required
//               value={cpassword}
//               onChange={(e) => setcPassword(e.target.value)}
//             />
//             <button type="submit" className="--btn --btn-primary --btn-block">
//               Register
//             </button>
//           </form>

//           <span >
//             <p>Already an account?</p>
//             <Link to="/login">Login</Link>
//           </span>
//         </div>
     
//       <div>
//         <img src={registerImg} alt="Register" width="400" />
//       </div>
//       </section>
//       </div>
//   );
// }

// export default Register;


import registerImg from "../../assets/register.png";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from "react-toastify";
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setcPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `https://server-1-1gbu.onrender.com/api/v1/auth/register`,
        { name, email, password, cpassword }
      );
      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      {/* Internal CSS Styling */}
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

        .auth-form span {
          display: block;
          text-align: center;
          margin-top: 1rem;
        }

        .auth-form span a {
          color: #007bff;
          text-decoration: none;
          font-weight: bold;
        }

        .auth-form span a:hover {
          text-decoration: underline;
        }

        .auth-img img {
          max-width: 100%;
          height: auto;
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
        <div className="auth-form">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={cpassword}
              onChange={(e) => setcPassword(e.target.value)}
            />
            <button type="submit">Register</button>
          </form>
          <span>
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </span>
        </div>

        <div className="auth-img">
          <img src={registerImg} alt="Register" />
        </div>
      </section>
    </div>
  );
};

export default Register;
