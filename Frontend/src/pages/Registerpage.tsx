import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import axios from "axios"
import { useNavigate,Link } from 'react-router-dom'

interface userdetails{
    username:string;
    email:string;
    password:string;
}

const Registerpage:React.FC = () => {
    
    const nav=useNavigate();

    const [fd,setfd]=useState<userdetails>({
        username:"",
        email:"",
        password:""
    })

    const handleregister=async(e:React.FormEvent)=>{
        e.preventDefault();
        
        try{
            const res=await axios.post("http://localhost:8000/api/auth/register",fd, {
                withCredentials: true // Ensure cookies are sent with the request
            });
            alert("You have successfully registered");
            nav("/");
            localStorage.setItem("protectvalue","true");

        }catch(error){
            console.log(error);
            alert("Internal server error please register again")
        }
    }

  return (
    <>
    <Navbar/>
<div className="login">
    <div className="loginheader">
        Register with us
    </div>

    <div className="loginmainbody">
        <form onSubmit={handleregister}>
        <input 
            type="text" 
            placeholder="Enter username" 
            name="username"
            value={fd.username} 
            autoComplete="off"
            onChange={(e)=>setfd({ ...fd, [e.target.name]: e.target.value })}
            
            />

            <input 
            type="text" 
            placeholder="Enter email" 
            name="email"
            value={fd.email} 
            autoComplete="off"
            onChange={(e)=>setfd({ ...fd, [e.target.name]: e.target.value })}
            
            />
            <input type="password" 
            placeholder="Enter password" 
            autoComplete="off"
            name="password"
            value={fd.password} 
            onChange={(e)=>setfd({ ...fd, [e.target.name]: e.target.value })}
            />

            <button type="submit">Register</button>
        </form>
        <div className="linkarea">
                Already have an account? <Link to="/login">Click here</Link>
            </div>
    </div>
</div>
    </>
  )
}

export default Registerpage
