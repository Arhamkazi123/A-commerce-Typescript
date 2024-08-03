// import './App.css'
import {Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"

const App:React.FC=()=>{
 
  return (
    <>
     <Routes>

     <Route path="/" element={<Home />} />
     <Route path="/login" element={<Login />} />

    </Routes>

    </>
  )
}

export default App
