import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";

import "../Navbar/Navbar.scss";
import { ROUTES } from "../../../../../router/routeNames";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navigation">
          <ul>
            <li>home</li>
            <li>about</li>
            <li>products</li>
            <li className="pages">
              pages
              <ul className="pages-menu">
                <li className="item">
                  <Link className="item-link" to="/account">
                    My Account
                  </Link>
                </li>

                <li className="item">
                  <Link className="item-link" to={`/${ROUTES.wishlist}`}>
                    My Wishlist
                  </Link>
                </li>

                <li className="item">
                  <Link className="item-link" to="/cart">
                    My Cart
                  </Link>
                </li>

                <li className="item">
                  <Link className="item-link" to="/checkout">
                    Checkout
                  </Link>
                </li>
              </ul>
            </li>
            <li>blog</li>
            <li>contact</li>
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
      </div>
    </div>
  );
};

export default Navbar;
