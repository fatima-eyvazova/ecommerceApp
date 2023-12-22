import { FaRegStar, FaRegEye } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useDispatch } from "react-redux";

import { addToBasket } from "../../../../../redux/slices/basketSlice";
import "./ProductCard.scss";

type Props = {
  id: string | number;
  name: string;
  price: number;
};

const ProductCard = ({ id, name, price }: Props) => {
  const dispatch = useDispatch();

  const addProductToBasket = () => {
    dispatch(addToBasket({ id, name, price, quantity: 1 }));
  };

  return (
    <div className="product-card">
      <div className="container">
        <div className="product-image">
          <img src="/src/assets/images/product-img.webp" alt="product" />
        </div>
        <div className="product-action">
          <FaRegEye className="eye" />
        </div>
        <div className="product-item-content">
          <h4>{name}</h4>
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
                <span className="money">${price}</span>
              </div>
            </div>
            <div className="product-cart" onClick={addProductToBasket}>
              <HiOutlineShoppingBag className="cart-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
