import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import "./Wishlist.scss";
import { ProductCard } from "../../components";
const Wishlist = () => {
  return (
    <div className="wishlist">
      <div className="wishlist-container">
        <div className="wishlist-content">
          <h2 className="title">Wishlist</h2>
          <ul className="navigation">
            <li className="list">
              <Link className="link" to="/">
                Home
              </Link>
              <IoIosArrowForward className="icon-row" />
            </li>
            <li className="active">
              <span>Wishlist</span>
            </li>
          </ul>
        </div>
        <div className="wishlist-items">
          <div className="wishlist-items-container">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
