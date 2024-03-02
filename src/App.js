import React, { useEffect,useState } from "react";

import {Routes, Route,useNavigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Forget from "./pages/auth/Forget";
import Signup from "./pages/auth/Signup";
import PrivateRoutes from "./components/common/ProtectedRoute";
import Dashboard from "./pages/ProtectedPages/Dashboard";
import TestReport from "./pages/ProtectedPages/TestReport";
import Notifications from "./pages/ProtectedPages/Notifications";
import DoctorRecomendation from "./pages/ProtectedPages/DoctorRecomendation";
import Blog from "./pages/ProtectedPages/Blog";
import Profile from "./pages/ProtectedPages/Profile";
import Search from "./pages/ProtectedPages/Search";
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
          <Route path="/notification" element={<Notifications/>} /> 
          <Route path="/test-report" element={<TestReport/>} /> 
          <Route path="/doctor-recomendation" element={<DoctorRecomendation/>} /> 
          <Route path="/blogs" element={<Blog/>} /> 
          <Route path="/profile" element={<Profile/>} /> 
          <Route path="/search:id" element={<Search/>} /> 

          </Route>
        </Routes>
   
    </div>
  );
};

export default App;
