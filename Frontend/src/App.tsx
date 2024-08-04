// import './App.css'
import {Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Registerpage from "./pages/Registerpage"
import Visitcart from "./pages/Visitcart"
import ProtectedRoute from "./utility/ProtectedRoute"
const App:React.FC=()=>{
 
  return (
    <>
     <Routes>

     <Route path="/" element={<Home />} />
     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Registerpage />} />
     

     <Route element={<ProtectedRoute />}>
     <Route path="/visitcart" element={<Visitcart />} />
        </Route>

    </Routes>

    </>
  )
}

export default App
