import React from "react";
import Logo from "../assets/logo.png";
import Button from "../components/common/Button";
import { useNavigate, useLocation } from "react-router-dom";
const AuthLayout = ({ children }) => {
  let navigate = useNavigate();
  const location = useLocation();
const handleClick=()=>{
  if(location.pathname === "/auth/signup"){
    navigate("/auth/login")
  }else{
    navigate("/auth/signup")

  }
}
  return (
    <div className=" h-full w-full flex">
     {location.pathname !== "/auth/login"&& <Button variant="outlined" className="h-[5%] w-[5%] m-4">
        Go Back
      </Button>}
      <div className=" flex  h-full w-[50%]">
        <div className=" flex flex-col   justify-center items-center w-full h-full">
          {children}
        </div>
      </div>
      <div className="bg-purple-800 w-[50%] rounded-bl-[45px]">
        <div className="flex h-full w-full justify-center gap-5 items-center flex-col px-3">
          <img
            src={Logo}
            alt="logo"
            className="w-[20%] h-[20%] rounded-full shadow-2xl"
          />
          <div className="text-white text-xl w-[75%]">
            <div className="text-center text-4xl uppercase font-semibold py-2  ">
              Diet med track
            </div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque nec erat enim. Nullam sapien nisi, vestibulum id ex sit
            amet, cursus feugiat eros. Pellentesque vestibulum semper molestie.
            Nam ac tellus sit amet nisi iaculis ultrices ut vitae dui.
            Vestibulum a posuere turpis. Proin lectus orci, pellentesque et
            mattis in, cursus sit amet velit. Nulla gravida sollicitudin
            porttitor. Cras sed neque finibus mauris varius interdum. Nulla
            facilisi.
          </div>
          <Button variant="outlined" onClick={handleClick}>
            {location.pathname !== "/auth/signup"
              ? "Create An Account"
              : "Already have an account"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
