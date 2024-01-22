import { useState } from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

import "../Navbar/Navbar.scss";
import { ROUTES } from "../../../../../router/routeNames";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar">
      <div className="container">
        <div className="navigation">
          <ul>
            <li>
              <Link to={ROUTES.home} className="link-item">
                home
              </Link>
            </li>
            <li>
              <Link to={ROUTES.products} className="link-item">
                products
              </Link>
            </li>
            <li className="pages">
              <Link to={ROUTES.home} className="link-item">
                pages
              </Link>

              <ul className="pages-menu">
                <li className="item">
                  <Link className="item-link" to={ROUTES.login}>
                    My Account
                  </Link>
                </li>

                <li className="item">
                  <Link className="item-link" to={ROUTES.wishlist}>
                    My Wishlist
                  </Link>
                </li>

                <li className="item">
                  <Link className="item-link" to={ROUTES.basket}>
                    My Cart
                  </Link>
                </li>

                <li className="item">
                  <Link className="item-link" to={ROUTES.checkout}>
                    Checkout
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="search">
          <form>
            <input
              type="text"
              placeholder="Find a product"
              className="input-text"
            />
            <button className="search-btn">
              <GoSearch className="search-icon" />
            </button>
          </form>
        </div>
        <div className="burger-menu">
          <div
            className={`menu-button ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
            style={{ color: "white" }}
          >
            {isOpen ? (
              <AiOutlineClose className="menu-close" />
            ) : (
              <RxHamburgerMenu className="menu-i" />
            )}
          </div>

          {isOpen && (
            <div className="menu-items">
              <Link className="link-page" to={ROUTES.home}>
                Home
              </Link>
              <Link className="link-page" to={ROUTES.products}>
                Products
              </Link>
              <Link className="link-page" to={`/${ROUTES.wishlist}`}>
                Favorites
              </Link>
              <Link className="link-page" to={`/${ROUTES.basket}`}>
                Basket
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
