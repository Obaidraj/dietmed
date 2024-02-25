import React from 'react'
import AuthLayout from '../../Layout/AuthLayout'
import InputField from './../../components/common/InputField';
import Button from '../../components/common/Button';
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { ForgetPasswordSchema } from "../../schema/schema";
import { ReactSVG } from "react-svg";
import MsgIcon from "../../assets/mail.svg"

const Forget = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ForgetPasswordSchema()),

  });
  const Submit=(x)=>{
    console.log(x)
  }
  return (
    <AuthLayout>
    <form  className="flex flex-col gap-2 md:w-[80%] lg:w-[60%] sm:w-[90%] xs:w-[90%]" onSubmit={handleSubmit(Submit)}>

    <div className="font-bold text-4xl text-center py-5">Sign In</div>
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
    

    
    <Button className="w-full" type="submit">Submit</Button>

  </form>
  </AuthLayout>
  );
}

export default Forget