import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../Header/Header.scss";
import Navbar from "../Navbar/Navbar";
import { RootState } from "../../../../../redux/types";
import { ROUTES } from "../../../../../router/routeNames";
import { logoutUser } from "../../../../../redux/slices/shared/authSlice";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const basketMenu = () => {
    setIsOpen(!isOpen);
  };
  const basketProducts = useSelector(
    (state: RootState) => state.basket.basketProducts
  );
  const total = useSelector((state: RootState) => state.basket.total);
  const { token, user } = useSelector((state: RootState) => state.auth);
  const userRole = user?.role;

  const itemCount = basketProducts.length;
  const logOutUserHandler = () => {
    const bool = confirm("Deqiq log out olmaq isteyirsiniz?");
    if (bool) {
      dispatch(logoutUser());
      navigate(ROUTES.login);
    }
  };

  return (
    <div className="header">
      <div className="header-top">
        <div className="container-header">
          <div className="logo-header">
            <img src="/src/assets/images/logo.png" alt="logo" />
          </div>
          <div className="header-right-site">
            <div className="default-message">
              <p>Default welcome msg!</p>
            </div>
            {userRole === "client" && token && (
              <div className="login-header" onClick={logOutUserHandler}>
                <FaRegUserCircle className="user-icon" />
              </div>
            )}
            {!token && (
              <Link className="login-header" to={ROUTES.login}>
                <FaRegUserCircle className="user-icon" />
              </Link>
            )}
            <div className="cart" onClick={basketMenu}>
              <HiOutlineShoppingBag className="cart-icon" />
              <div className="count">
                <span>{itemCount}</span>
              </div>
              {isOpen && (
                <div className="shopping-cart">
                  <div className="shop-cart-wrap">
                    <IoCloseSharp className="close-icon" />
                    <div className="shop-items">
                      {basketProducts.map((product) => (
                        <div className="shop-item">
                          <div className="shop-img">
                            <img
                              src="/src/assets/images/3_861d7348-c426-4c39-9565-59e278a304ac.webp"
                              alt="shop"
                            />
                          </div>
                          <h3 className="shop-title">
                            <Link to="/" className="title-item">
                              {product.name}
                            </Link>
                            <span className="price-item">
                              $ {product.price}
                            </span>
                          </h3>
                        </div>
                      ))}
                    </div>
                    <h4 className="shop-cart-total">
                      <span className="cart-total">Subtotal:</span>
                      <span className="price">${total}</span>
                    </h4>
                    <div className="shopping-cart-btn">
                      <Link className="link-page" to={`/${ROUTES.basket}`}>
                        View Cart
                      </Link>
                      <Link className="link-page" to={`/${ROUTES.checkout}`}>
                        Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
