import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { MainLayout } from "../../../components";
import "../Register/Register.scss";
import { ROUTES } from "../../../../../router/routeNames";
import { registerSchema } from "../../../../../validationSchemas/register";
import { axiosInstance } from "../../../../../utils/axiosInstance";
import axios from "axios";

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      pasword: "",
      email: "",
      surname: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const handleFormSubmit = async (values: unknown) => {
    console.log(values);
    const response = await fetch(
      "https://frontend-api-dypw.onrender.com/api/276d43dd-1844-4c0b-acd5-39b6e16d3895/site/register",
      {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await response.json();
    console.log(res);
  };

  return (
    <MainLayout>
      <div className="register">
        <div className="register-container">
          <div className="account-title">
            <h2>Account</h2>
            <ul className="navigation">
              <li>
                <Link to={ROUTES.home} className="link">
                  Home
                </Link>
                <IoIosArrowForward className="row-icon" />
              </li>
              <li>
                <span>Account</span>
              </li>
            </ul>
          </div>
          <div className="register-wrapper">
            <div className="register-nav">
              <Link to={ROUTES.login} className="link-register">
                <h4> Log in </h4>
              </Link>
              <Link to={ROUTES.register} className="link-active">
                <h4> Register </h4>
              </Link>
            </div>
            <div className="tab-content">
              <div className="form-container">
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                  <input
                    type="text"
                    placeholder="First Name"
                    {...register("name")}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    {...register("surname")}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    {...register("pasword")}
                  />

                  <div className="button-box">
                    <button type="submit">
                      <span>Register</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
