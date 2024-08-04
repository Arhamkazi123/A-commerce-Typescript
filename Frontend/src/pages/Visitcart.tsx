
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
const Visitcart:React.FC= () => {

  const [info,setinfo]=useState([]);

  useEffect(()=>{

    const fetchsaved = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/cart/getcartitems", {
          withCredentials: true, // Ensure cookies are sent with the request
        });
        alert("got the info");
        setinfo(res.data);
      } catch (error) {
        alert("not able to fetch");
        console.log(error);
      }
    };
    
fetchsaved();
console.log(info);
  },)

  return (
    <>
    <Navbar/>
    
    </>
  )
}

export default Visitcart
