import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import "./Wishlist.scss";
import { ProductCard } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/types";

const Wishlist = () => {
  const wishlistProduct = useSelector(
    (state: RootState) => state.wishList.wishListProducts
  );
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
            {wishlistProduct.map((product) => (
              <ProductCard {...product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
