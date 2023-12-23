// react-icons
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { MdDelete } from "react-icons/md";

import "./BasketItem.scss";
import { useDispatch } from "react-redux";
import {
  addToBasket,
  removeItem,
  decreaseItem,
} from "../../../../../redux/slices/basketSlice";

type Props = {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
};

const BasketItem = ({ id, name, price, quantity, subtotal }: Props) => {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(addToBasket({ id, name, price, quantity: 1 }));
  };

  const removeItemFromBasket = () => {
    dispatch(removeItem({ id, subtotal }));
  };

  const decreaseItemByOne = () => {
    dispatch(decreaseItem({ id, price }));
  };

  return (
    <tbody>
      <tr>
        <td className="product-img">
          <img
            src="//dilan-1.myshopify.com/cdn/shop/products/12_ec7e7dce-ed1c-4cd3-8aa1-71c3e316df11_85x.jpg?v=1525694886"
            alt="product"
          />
        </td>
        <td className="product-name">{name}</td>
        <td className="product-price-cart">
          <span className="money">${price}</span>
        </td>
        <td className="product-quantity">
          <div className="cart-plus-minus">
            <LuMinus className="minus-icon" onClick={decreaseItemByOne} />
            <span className="count">
              <span>{quantity}</span>
            </span>
            <GoPlus className="plus-icon" onClick={handleIncreaseQuantity} />
          </div>
        </td>
        <td className="product-subtotal">
          <span className="money">${subtotal}</span>
        </td>
        <td className="product-remove" onClick={removeItemFromBasket}>
          <MdDelete style={{ fontSize: "18px" }} />
        </td>
      </tr>
    </tbody>
  );
};

export default BasketItem;
