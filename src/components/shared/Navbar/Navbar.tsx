import { GoSearch } from "react-icons/go";

import "../Navbar/Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navigation">
          <ul>
            <li>home</li>
            <li>about</li>
            <li>products</li>
            <li>pages</li>
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
