import { useState } from "react"
import Navbar from "../components/Navbar"
import "./Login.css"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

interface Formdata{
    email:string;
    password:string;
}

const Login:React.FC = () => {

    localStorage.setItem("protectvalue","false");
    const nav=useNavigate();
    const [fd,setfd]=useState<Formdata>({
        email:"",
        password:""
    })
    
    const handlelogin=async(e:React.FormEvent)=>{
        e.preventDefault();
        try{
            const res=await axios.post("http://localhost:8000/api/auth/login",fd, {
                withCredentials: true // Ensure cookies are sent with the request
            });
            alert("Logged in successfully");
            nav("/");
            localStorage.setItem("protectvalue","true");

        }catch(error){
            alert("Not able to login");
            console.log(error);
        }
    }
  return (
    <>
    <Navbar/>
<div className="login">
    <div className="loginheader">
        Login Page
    </div>

    <div className="loginmainbody">
        <form onSubmit={handlelogin}>
            <input 
            type="text" 
            placeholder="Enter registered email" 
            name="email"
            value={fd.email} 
            autoComplete="off"
            onChange={(e)=>setfd({ ...fd, [e.target.name]: e.target.value })
            
            }/>
            <input type="password" 
            placeholder="Enter password" 
            autoComplete="off"
            name="password"
            value={fd.password} 
            onChange={(e)=>setfd({ ...fd, [e.target.name]: e.target.value })}/>

            <button type="submit">Login</button>
            <div className="linkarea">
                Dont have an account? <Link to="/register">Click here</Link>
            </div>
        </form>
    </div>
</div>
    </>
  )
}

export default Login
