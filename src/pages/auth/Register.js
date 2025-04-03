
import styles from "./auth.module.scss";
import registerImg from "../../assets/register.png";
import Card from "../../components/card/Card";

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';



import { toast } from "react-toastify";
import axios from 'axios';

const Register = () => {




const[name,setName]=useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ cpassword, setcPassword] = useState(''); 


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `https://server-1-27iv.onrender.com/api/v1/auth/register`,
        {
         name,
          email,
          password,
           cpassword
          
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("something wrong");
    }
  }
    
  return (
    
 <div>
<section className={`container ${styles.auth}`}>
        <div>
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
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={cpassword}
              onChange={(e) => setcPassword(e.target.value)}
            />
            <button type="submit" className="--btn --btn-primary --btn-block">
              Register
            </button>
          </form>

          <span >
            <p>Already an account?</p>
            <Link to="/login">Login</Link>
          </span>
        </div>
     
      <div>
        <img src={registerImg} alt="Register" width="400" />
      </div>
      </section>
      </div>
  );
}

export default Register;
