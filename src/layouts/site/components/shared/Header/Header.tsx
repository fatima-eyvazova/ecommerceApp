import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";

import Navbar from "../Navbar/Navbar";
import { RootState } from "../../../../../redux/types";
import { ROUTES } from "../../../../../router/routeNames";
import LogOutModal from "../../../../shared/modals/LogOutModal/LogOutModal";
import "../Header/Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

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
    setOpenLogoutModal(true);
  };

  return (
    <>
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
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                src={product?.images?.[0]?.url}
                                alt={`product - ${product.title}`}
                              />
                            </div>
                            <h3 className="shop-title">
                              <Link
                                to={`/products/${product?._id}`}
                                className="title-item"
                              >
                                {product?.title}
                              </Link>
                              <span className="price-item">
                                $ {product?.salePrice}
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
      {openLogoutModal && <LogOutModal setOpenModal={setOpenLogoutModal} />}
    </>
  );
};

export default Header;
