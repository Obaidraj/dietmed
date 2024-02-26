import React, { useEffect,useState } from "react";

import {Routes, Route,useNavigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Forget from "./pages/auth/Forget";
import Signup from "./pages/auth/Signup";
import PrivateRoutes from "./components/common/ProtectedRoute";
import Dashboard from "./pages/ProtectedPages/Dashboard";
const App = () => {


//check the app deployments
  return (
    <div className="h-screen w-screen box-border">
    
        <Routes>
         
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/forget-password" element={<Forget />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Dashboard/>} />

          </Route>
        </Routes>
   
    </div>
  );
};

export default App;
