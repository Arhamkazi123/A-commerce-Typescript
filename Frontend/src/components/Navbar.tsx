import "./Navbar.css";
import { Link, useNavigate } from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import axios from "axios";
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const nav=useNavigate();
  useEffect(() => {
   
    const protectvalue = localStorage.getItem('protectvalue');
    setIsLoggedIn(protectvalue === 'true');
  }, []);

  const handleLogout = async () => {
    try {
      
      await axios.post("http://localhost:8000/api/auth/logout", {}, {
        withCredentials: true 
      });
      alert("Logged out successfully");
      localStorage.clear(); 
      nav("/login"); 
    } catch (error) {
      alert("Logout failed:");
    }
  };
  return (
    <div className="navbar">
      <div className="headingnav">
        <Link style={{ textDecoration: "none", color: "white" }} to="/">A-commerce</Link>
      </div>

      <div className="navelements">
        <ul>
          {!isLoggedIn ? (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          ) : (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
          <li>
            <Link to="/visitcart">Your Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
