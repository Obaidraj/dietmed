import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import InputField from "../../components/common/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import AuthLayout from "../../Layout/AuthLayout";
import { LoginSchema } from "../../schema/schema";
import MsgIcon from "../../assets/mail.svg"
import LockIcon from "../../assets/lock.svg"
  import { ReactSVG } from "react-svg";
const Login = () => {
  let navigate = useNavigate();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema()),

  });
  const Submit=(x)=>{
    console.log(x)
    navigate("/") 
  }
  return (
    <AuthLayout>
    <form  className="flex flex-col gap-2 md:w-[80%] lg:w-[60%] sm:w-[90%] xs:w-[90%]" onSubmit={handleSubmit(Submit)}>

    <div className="font-bold text-4xl text-center py-5 uppercase">Sign In</div>
    <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <InputField
                    type="email"
                    placeholder="Enter your email"
                    label="Email"
                    {...register("email")}
                    icon={< ReactSVG src={MsgIcon} />}
                    name="Email"
                    value={field.value}
                    onChange={(value) => field.onChange(value)}
                    ref={field.ref}
                    field={field}
                    error={errors?.email && errors.email.message}
                  />
                )}
              />
    
    <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <InputField
                    type="password"
                    placeholder="Enter your Password"
                    label="password"
                    {...register("password")}
                    icon={< ReactSVG src={LockIcon} />}
                    name="password"
                    value={field.value}
                    onChange={(value) => field.onChange(value)}
                    ref={field.ref}
                    field={field}
                    error={errors?.password && errors.password.message}
                  />
                )}
              />
    <div className="flex justify-between">
      <Link
        to="/auth/forget-password"
        className="text-start text-blue-400 underline"
      >
        Forget Password?
      </Link>
    </div>
    <Button className="w-full" type="submit">SignIn</Button>

  </form>
  </AuthLayout>
  );
};

export default Login;
