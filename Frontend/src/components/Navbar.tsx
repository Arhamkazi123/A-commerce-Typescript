import "./Navbar.css"
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="headingnav">
      <Link style={{textDecoration:"none",color:"white"}} to="/">A-commerce</Link>
      </div>

      <div className="navelements">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/">Register</Link>
          </li>
          <li>
            <Link to="/">Your Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

