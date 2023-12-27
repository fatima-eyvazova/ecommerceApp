// react-icons
import { FaRegStar, FaRegEye } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegHeart, FaHeart } from "react-icons/fa6";

import { useDispatch, useSelector } from "react-redux";

import { addToBasket } from "../../../../../redux/slices/basketSlice";
import { handleWishList as handleWishListAction } from "../../../../../redux/slices/wishListSlice";
import "./ProductCard.scss";
import { RootState } from "../../../../../redux/types";
import { useState } from "react";

type Props = {
  id: string | number;
  name: string;
  price: number;
};

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};
const ProductCard = ({ id, name, price }: Props) => {
  const wishListProducts = useSelector(
    (state: RootState) => state.wishList.wishListProducts
  );
  const isFoundElement = wishListProducts.some((item) => item.id === id);
  const [color, setColor] = useState<boolean>(isFoundElement);

  const dispatch = useDispatch();

  const addProductToBasket = () => {
    dispatch(addToBasket({ id, name, price, quantity: 1 }));
  };

  const handleWishList = () => {
    dispatch(handleWishListAction({ id, name, price }));
    setColor((prev) => !prev);
  };

  const starList = [1, 2, 3, 4, 5];
  const [colorClick, setColorClick] = useState<number | undefined>(0);
  const [colorOver, setColorOver] = useState<number | undefined>(0);

  function viewedClick(value: number): void {
    setColorClick(value);
  }
  function viewedOver(value: number): void {
    setColorOver(value);
  }
  function viewedLive(): void {
    setColorOver(undefined);
  }

  return (
    <div className="product-card">
      <div className="container">
        <div className="product-image">
          <img src="/src/assets/images/product-img.webp" alt="product" />
        </div>
        <div className="product-action">
          <FaRegEye className="eye" />
        </div>
        <div className="product-heart" onClick={handleWishList}>
          {color ? (
            <FaHeart style={{ color: "red" }} />
          ) : (
            <FaRegHeart style={{ color: "black" }} />
          )}
        </div>
        <div className="product-item-content">
          <h4>{name}</h4>
          <div className="product-price-cart">
            <div className="rating-price">
              <div className="product-rating">
                {starList.map((star) => (
                  <FaRegStar
                    className="icon-star"
                    key={star}
                    onMouseOver={() => viewedOver(star + 1)}
                    onMouseLeave={viewedLive}
                    onClick={() => viewedClick(star + 1)}
                    color={
                      (colorClick || colorOver) > star
                        ? colors.orange
                        : colors.grey
                    }
                  />
                ))}
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
