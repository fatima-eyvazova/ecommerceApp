import { FaRegStar, FaRegEye } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";

import "./ProductCard.scss";

// interface Props {
//   name: string;
//   price: number;
// }

// const ProductCard = ({ name, price }: Props) => {
//   return (
//     <div className="flex flex-column">
//       <span className="green-span">HELLOOOOOO</span>
//       <span>{name}</span>
//       <span>{price}</span>
//     </div>
//   );
// };

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="container">
        <div className="product-image">
          <img src="src/assets/images/product-img.webp" alt="product" />
        </div>
        <div className="product-action">
          <FaRegEye className="eye" />
        </div>
        <div className="product-content">
          <h4>Variable Product</h4>
          <div className="product-price-cart">
            <div className="rating-price">
              <div className="product-rating">
                <FaRegStar className="icon-star" />
                <FaRegStar className="icon-star" />
                <FaRegStar className="icon-star" />
                <FaRegStar className="icon-star" />
                <FaRegStar className="icon-star" />
              </div>
              <div className="price">
                <span className="money">$300.00</span>
              </div>
            </div>
            <div className="product-cart">
              <HiOutlineShoppingBag className="cart-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
