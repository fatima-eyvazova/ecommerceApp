import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import MainLayout from "../../../layout/MainLayout";
import "../Login/Login.scss";

const Login = () => {
  return (
    <MainLayout>
      <div className="login">
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
              <Link to="/login" className="link">
                <h4> Log in </h4>
              </Link>
              <Link to="/register" className="link-active">
                <h4> Register </h4>
              </Link>
            </div>
            <div className="tab-content">
              <div className="form-container">
                <form>
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <div className="button-box">
                    <button type="submit">
                      <span>Sign In</span>
                    </button>
                    <div className="login-text">
                      <Link to="#recover" className="text">
                        Forgot your password?
                      </Link>
                    </div>
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
