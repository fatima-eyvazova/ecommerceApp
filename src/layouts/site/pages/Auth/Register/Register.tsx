import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import { MainLayout } from "../../../components";
import "../Register/Register.scss";

const Register = () => {
  return (
    <MainLayout>
      <div className="register">
        <div className="register-container">
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
          <div className="register-wrapper">
            <div className="register-nav">
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
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />

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
