import React, { useState } from "react";
import InputField from "../components/common/InputField";
import { FaBell } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Logo from "../assets/logo.png";
import { TbReportMedical,TbReportAnalytics } from "react-icons/tb";
import { CiHome } from "react-icons/ci";
import { FaBlogger } from "react-icons/fa";

import Dropdown from "../components/common/Dropdown";
import { useNavigate } from 'react-router-dom';

const ProtectedLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  let navigate = useNavigate();

  const options = [
    { name: "Profile", icon: <FaUser />, route: "/profile" },
    { name: "Blogs", icon: <FaUser />, route: "/blogs" },
    {
      name: "Recomendadtion",
      icon: <FaUser />,
      route: "/doctor-recomendation",
    },
    { name: "Reports", icon: <FaUser />, route: "/test-report" },
  ];
  const handleClick=(item)=>{
    navigate(item.route)
  }
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className=" h-[8%]  sm:flex justify-between bg-gray-200 hidden shadow-md w-full ">
        <div className="flex items-center mx-4">
          <div>
            {" "}
            <img
              src={Logo}
              alt="logo"
              className="object-cover h-12 w-12 rounded-full shadow-2xl"
            />
          </div>
          <p className="font-bold text-3xl capitalize">Health Harbor</p>
        </div>
        <div className="flex gap-5 mx-3 my-3">
          <div>
            <InputField
              type="text"
              placeholder="Enter Doctor ID"
              label="Search"
              icon2={<CiSearch />}
              name="search"
            />
          </div>

          <div className="flex items-center text-3xl text-purple-600" onClick={()=>navigate("/notification")}>
            <FaBell title="Notification" />
          </div>
          <div className="flex items-center text-3xl text-purple-600">
            {" "}
            <Dropdown
              titleIcon={<FaUser />}
              toggleDropdown={toggleDropdown}
              isOpen={isOpen}
              options={options}
              onClick={(item)=>handleClick(item)}
            />
          </div>
        </div>
      </div>
      {/* ------------------------ */}
      <div className="sm:hidden flex h-[7%] bg-purple-500 justify-between px-2 items-center">
        <div className="flex gap-2">
      
            <img
              src={Logo}
              alt="logo"
              className="object-cover h-10 w-10 rounded-full shadow-2xl"
            />
    
       
        </div>
          <div className="w-[75%] py-[34px]">    <InputField
              type="text"
              placeholder="Enter Doctor ID"
              label="Search"
              icon2={<CiSearch />}
              name="search"
            /></div>
        <div className="flex gap-2 text-2xl items-center justify-end">
          <div className="text-3xl text-yellow-100" onClick={()=>navigate("/notification")}>  <FaBell title="Notification" /></div>
        </div>
      </div>
      <div className="flex-1"> {children}</div>
      <div className=" h-[5%] bg-yellow-400 sm:flex hidden"> Footer</div>
      <div className=" h-[5%] bg-gray-300 sm:hidden flex justify-between items-center px-2 text-4xl py-4"> 
      <div title={"Test Report"} onClick={()=>navigate("/test-report")}><TbReportMedical/></div>
      <div title={"Doctor Recomendation"} onClick={()=>navigate("/doctor-recomendation")}><TbReportAnalytics/></div>
      <div title={"Home"} className="border border-white rounded-full p-4 relative bottom-5 bg-gray-300" onClick={()=>navigate("/")}><CiHome/></div>
      <div title={"Blog"} onClick={()=>navigate("/blogs")}><FaBlogger/></div>
      <div title={"Profile"} onClick={()=>navigate("/profile")}><FaUser/></div>

      
      </div>
    </div>
  );
};

export default ProtectedLayout;
