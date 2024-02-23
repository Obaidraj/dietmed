import React from "react";
import InputField from "../../components/common/InputField";

import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import AuthLayout from "../../Layout/AuthLayout";
const Login = () => {
  return (
    <AuthLayout>
    <div className="flex flex-col gap-2 w-[40%]">
    <div className="font-bold text-4xl text-center py-5">Sign In</div>
    <InputField
      placeholder={"Enter Your E-mail"}
      type={"email"}
      className={"w-full"}
    />
    <InputField
      placeholder={"Enter Your Password"}
      type={"password"}
      className={"w-full"}
    />
    <div className="flex justify-between">
      <Link
        to="/auth/forget-password"
        className="text-start text-blue-400 underline"
      >
        Forget Password?
      </Link>
    </div>
    <Button className="w-full">SignIn</Button>
  </div>
  </AuthLayout>
  );
};

export default Login;
