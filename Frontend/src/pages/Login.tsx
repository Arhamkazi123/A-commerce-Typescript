import { useState } from "react"
import Navbar from "../components/Navbar"
import "./Login.css"


const Login:React.FC = () => {

    const [form,setform]=useState{

        email:"",
        password:""
        
    }
    const handlelogin=async(e:React.FormEvent)=>{
        e.preventDefault();
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
            <input type="text" placeholder="Enter registered email" value={}/>
            <input type="text" placeholder="Enter password" />
            <button type="submit">Login</button>
        </form>
    </div>
</div>
    </>
  )
}

export default Login
