
import * as yup from "yup";
export const LoginSchema = () =>
  yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email.")
      .required("Please enter an email."),
    password: yup.string().required("Please enter your password."),
  });
  export const ForgetPasswordSchema = () =>
  yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email.")
      .required("Please enter an email."),
 
  });
  export const signUpSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email.")
      .required("Please enter your email."),
    name: yup
      .string()
      .matches(/^([A-Za-z]+\s*){1,}$/, "Name must contain at least one letter.")
      .required("Please enter your name."),
    password: yup.string().required("").min(8, ""),
    confirmPassword: yup
      .string()
      .min(8, "")
      .required("Please confirm your password.")
      .oneOf([yup.ref("password"), null], " Passwords must match."),
  });