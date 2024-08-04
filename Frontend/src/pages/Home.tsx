import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import axios from "axios";


interface Product {
  _id: string;
  productname: string;
  price: string;
  productimage: string;
  description: string;
  category: string;
  createdAt:string;
}

const Home: React.FC = () => {

 
  

  const [info, setInfo] = useState<Product[]>([]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); 
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/productoverview/getproducts");
        setInfo(res.data.message);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="home">
        <div className="product-list">
          {info.map((product) => (
            <div key={product._id} className="product-card">
              <img src={product.productimage} alt={product.productname} className="product-image" />
              <div className="product-details">
                <h2 className="product-name">{product.productname}</h2>
                <p className="product-price">{product.price}/-</p>
                <p className="product-description">{product.description}</p>
                <p className="product-category">{product.category}</p>
                <p className="product-date">Available from: {formatDate(product.createdAt)}</p>
                <button className="Addtocart">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
