import { useDispatch } from "react-redux";
// react-icons
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { MdDelete } from "react-icons/md";

import "./BasketItem.scss";
import {
  addToBasket,
  removeItem,
  decreaseItem,
} from "../../../../../redux/slices/site/basketSlice";
import { BasketProduct } from "../../../../../redux/types";

const BasketItem = (product: BasketProduct) => {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(addToBasket({ ...product, quantity: 1 }));
  };

  const removeItemFromBasket = () => {
    dispatch(removeItem({ _id: product?._id, subtotal: product?.subtotal }));
  };

  const decreaseItemByOne = () => {
    dispatch(
      decreaseItem({
        _id: product?._id,
        price: product?.salePrice || product?.productPrice,
      })
    );
  };

  const image = product?.images?.[0] as {
    url: string;
    public_id: string;
  };

  return (
    <tbody>
      <tr>
        <td className="product-img">
          <img
            src={image?.url}
            alt={`product - ${product?.title}`}
            style={{ objectFit: "contain", width: 100 }}
          />
        </td>
        <td className="product-name">{product?.title}</td>
        <td className="product-price-cart">
          <span className="money">${product?.salePrice}</span>
        </td>
        <td className="product-quantity">
          <div className="cart-plus-minus">
            <LuMinus className="minus-icon" onClick={decreaseItemByOne} />
            <span className="count">
              <span>{product?.quantity}</span>
            </span>
            <GoPlus className="plus-icon" onClick={handleIncreaseQuantity} />
          </div>
        </td>
        <td className="product-subtotal">
          <span className="money">${product?.subtotal}</span>
        </td>
        <td className="product-remove" onClick={removeItemFromBasket}>
          <MdDelete style={{ fontSize: "18px" }} />
        </td>
      </tr>
    </tbody>
  );
};

export default BasketItem;
