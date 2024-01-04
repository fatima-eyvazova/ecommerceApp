import * as yup from "yup";

export const registerSchema = yup.object({
  email: yup.string().required("Email is required!"),
  pasword: yup.string().required("Password is required!"),
  name: yup.string().required("First Nmae is required!"),
  surname: yup.string().required("Last Name is required!"),
});
