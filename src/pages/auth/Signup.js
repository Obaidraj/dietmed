import React from "react";
import InputField from "../../components/common/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import AuthLayout from "../../Layout/AuthLayout";
import { signUpSchema } from "../../schema/schema";
import MsgIcon from "../../assets/mail.svg";
import PersonIcon from "../../assets/personIcon.svg";
import LockIcon from "../../assets/lock.svg";
import { ReactSVG } from "react-svg";
import { useWindowSize } from 'react-use';


const Signup = () => {
  const { width } = useWindowSize();
  const [password, setPassword] = React.useState("");
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });
  const checkPasswordRequirements = () => {
    const requirements = {
      minLength: password.length >= 8,
      specialChar: /[!@#$%^&*()_+{}\[\]|:;"'<>,.?/~\\`\-=/]/.test(password),
      number: /\d/.test(password),
      capital: /[A-Z]/.test(password),
    };

    return requirements;
  };
  const requirements = checkPasswordRequirements();
  const Submit = (x) => {
    console.log(x);
  };
  return (
    <AuthLayout>
      <form
        className={`flex flex-col gap-2 md:w-[80%] lg:w-[60%] sm:w-[90%] xs:w-[90%]`}
        onSubmit={handleSubmit(Submit)}
      >
        <div className="font-bold text-4xl text-center py-5 uppercase">
          Sign up
        </div>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <InputField
              placeholder="Enter your full name"
              label="Name"
              value={field.value}
              icon={<ReactSVG src={PersonIcon} />}
              {...register("name")}
              name="name"
              onChange={(value) => {
                field.onChange(value);
              }}
              ref={field.ref}
              type="text"
              error={errors?.name && errors.name.message}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <InputField
              placeholder="Enter your email"
              {...register("email")}
              label="Email"
              icon={<ReactSVG src={MsgIcon} />}
              value={field.value}
              onChange={(value) => {
                field.onChange(value);
              }}
              ref={field.ref}
              name="Email"
              type="email"
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
              placeholder="Enter your password"
              label="Password"
              icon={<ReactSVG src={LockIcon} />}
              {...register("password")}
              value={field.value}
              onChange={(value) => {
                field.onChange(value);
                setPassword(value.target.value);
              }}
              ref={field.ref}
              name="Password"
              type="password"
              error={errors?.password && errors.password.message}
            />
          )}
        />
        {password &&
          (!requirements.minLength ||
            !requirements.number ||
            !requirements.specialChar ||
            !requirements.capital) && (
            <ul className="px-3 mt-1">
              <li className="text-[12px]">
                {requirements.minLength ? (
                  <span className="text-green-500 text-[12px]">&#10003;</span>
                ) : (
                  <span className="text-red-500 text-[11px]">&#10060;</span>
                )}{" "}
                Password has more than 8 characters.
              </li>
              <li className="text-[12px]">
                {requirements.specialChar ? (
                  <span className="text-green-500 text-[12px]">&#10003;</span>
                ) : (
                  <span className="text-red-500 text-[11px]">&#10060;</span>
                )}{" "}
                Password has special characters.
              </li>
              <li className="text-[12px]">
                {requirements.number ? (
                  <span className="text-green-500 text-[12px]">&#10003;</span>
                ) : (
                  <span className="text-red-500 text-[11px]">&#10060;</span>
                )}{" "}
                Password has a number.
              </li>
              <li className="text-[12px]">
                {requirements.capital ? (
                  <span className="text-green-500 text-[12px]">&#10003;</span>
                ) : (
                  <span className="text-red-500 text-[11px]">&#10060;</span>
                )}{" "}
                Password has a capital letter.
              </li>
            </ul>
          )}
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <InputField
              placeholder="Re enter your password"
              label="Password"
              icon={<ReactSVG src={LockIcon} />}
              {...register("confirmPassword")}
              value={field.value}
              onChange={(value) => {
                field.onChange(value);
              }}
              ref={field.ref}
              name="ConfirmPassword"
              type="password"
              error={errors?.confirmPassword && errors.confirmPassword.message}
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
        <Button className="w-full" type="submit">
          SignIn
        </Button>
      </form>
    </AuthLayout>
  );
};

export default Signup;
