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
            <li>
              <Link to={`/${ROUTES.wishlist}`}>pages</Link>
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
