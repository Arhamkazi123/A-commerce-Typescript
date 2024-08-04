import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

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
            const res=await axios.post("http://localhost:8000/api/auth/register",fd);
            alert("You have successflly registered");
            nav("/");

        }catch(error){
            console.log(error);
            alert("Internal server eror please register again")
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
    </div>
</div>
    </>
  )
}

export default Registerpage
