import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import './Visitcart.css'; // Ensure you have this CSS file for styling
import { isAuthenticated } from '../utility/checkauth';

interface Product {
  id: string;
  product: {
    name: string;
    price: string;
    image: string;
    description: string;
  };
}

const Visitcart: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const andar=isAuthenticated();
  
  useEffect(() => {
    const fetchSaved = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/cart/getcartitems", {
          withCredentials: true, // Ensure cookies are sent with the request
        });
        
        setCartItems(res.data);
      } catch (error) {
        alert("Not able to fetch");
        console.error(error);
      }
    };
    
    fetchSaved();
  }, []);

  return (
    <>
      <Navbar />
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
          </div>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.product.image} alt={item.product.name} className="cart-item-image"/>
                <div className="cart-item-details">
                  <h3>{item.product.name}</h3>
                  <p>{item.product.description}</p>
                  <p>Price: {item.product.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Visitcart;
