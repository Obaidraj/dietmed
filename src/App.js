import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Routes, Route,useNavigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Forget from "./pages/auth/Forget";
import Signup from "./pages/auth/Signup";
const App = () => {
  let navigate = useNavigate();
useEffect(() => {
  if(!localStorage.getItem("jwt")){
    navigate('/auth/login');

  }


}, [])
  return (
    <div className="h-screen w-screen box-border">
    
        <Routes>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/forget-password" element={<Forget />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Routes>
   
    </div>
  );
};

export default App;
