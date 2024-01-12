import { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch } from "react-redux";

import { MainLayout } from "../../../components";
import { ROUTES } from "../../../../../router/routeNames";
import "../Login/Login.scss";
import { makeRequest } from "../../../../../services/api";
import { addClientInfo } from "../../../../../redux/slices/shared/userProfileSlice";
import { Profile } from "../../../../../redux/types";

const Login = () => {
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const schema = Yup.object({
    email: Yup.string()
      .email("Bu e-poçt olmalıdır")
      .required("E-poçt tələb olunur"),
    password: Yup.string()
      .required("Parol tələb olunur")
      .min(6, "Parol 6 simvoldan ibarət olmalıdır"),
  }).required();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isLoading, isDirty },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: unknown) => {
    const res = await makeRequest("/login", "post", values);

    const data = res.data as { data: unknown; success: boolean };

    const isSuccess = data && data?.success;
    if (isSuccess) {
      dispatch(addClientInfo(data?.data as Profile));
      navigate(ROUTES.home);
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setErr(res.data?.message);
    }
  };

  return (
    <MainLayout>
      <div className="login-page">
        <div className="login-container">
          <div className="account-title">
            <h2>Account</h2>
            <ul className="navigation">
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
                <IoIosArrowForward className="row-icon" />
              </li>
              <li>
                <span>Account</span>
              </li>
            </ul>
          </div>
          <div className="login-register-wrapper">
            <div className="login-register-nav">
              <Link to={ROUTES.login} className="link-login">
                <h4> Log in </h4>
              </Link>
              <Link to={ROUTES.register} className="link-active">
                <h4> Register </h4>
              </Link>
            </div>
            <div className="tab-content">
              <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                  />
                  {!!errors.email?.message && (
                    <p style={{ color: "red" }}>{errors.email?.message}</p>
                  )}
                  <input
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                  />
                  {!!errors.password?.message && (
                    <p style={{ color: "red" }}>{errors.password?.message}</p>
                  )}
                  {err && <p style={{ color: "red" }}>{err}</p>}
                  <div className="button-box">
                    <button
                      type="submit"
                      disabled={!isValid || isLoading || !isDirty}
                    >
                      <span>Sign In</span>
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

export default Login;
