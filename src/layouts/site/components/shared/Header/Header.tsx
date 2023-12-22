import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";

import "../Header/Header.scss";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <div className="container">
          <div className="logo">
            <img src="/src/assets/images/logo.png" alt="logo" />
          </div>
          <div className="header-right-site">
            <div className="default-message">
              <p>Default welcome msg!</p>
            </div>
            <div className="login">
              <FaRegUserCircle className="user-icon" />
            </div>
            <div className="cart">
              <HiOutlineShoppingBag className="cart-icon" />
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
