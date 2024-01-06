import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { MainLayout } from "../../../components";
import "../Register/Register.scss";
import { ROUTES } from "../../../../../router/routeNames";
import { registerSchema } from "../../../../../validationSchemas/register";
import { makeRequest } from "../../../../../services/api";
import { useState } from "react";

type FormValues = {
  name: string;
  password: string;
  email: string;
  surname: string;
};

const Register = () => {
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isLoading, isValid, isDirty },
  } = useForm({
    defaultValues: {
      name: "",
      password: "",
      email: "",
      surname: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const handleFormSubmit = async (values: FormValues) => {
    const response = await makeRequest("/site/register", "post", values);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const isSuccess = response.data && response.data?.success;
    if (isSuccess) {
      navigate(ROUTES.login);
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setErr(response.data?.message);
    }
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
                  {errors.name && <p>{errors.name.message}</p>}
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
                    {...register("password")}
                  />

                  {err && <p>{err}</p>}
                  <div className="button-box">
                    <button
                      type="submit"
                      disabled={!isValid || isLoading || !isDirty}
                    >
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
