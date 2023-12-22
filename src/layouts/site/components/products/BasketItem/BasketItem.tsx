// react-icons
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { MdDelete } from "react-icons/md";

import "./BasketItem.scss";

const BasketItem = () => {
  return (
    <tbody>
      <tr>
        <td className="product-img">
          <img
            src="//dilan-1.myshopify.com/cdn/shop/products/12_ec7e7dce-ed1c-4cd3-8aa1-71c3e316df11_85x.jpg?v=1525694886"
            alt="product"
          />
        </td>
        <td className="product-name">
          Variable Product - sm / yellow / Cotton
        </td>
        <td className="product-price-cart">
          <span className="money">$400.00</span>
        </td>
        <td className="product-quantity">
          <div className="cart-plus-minus">
            <LuMinus className="minus-icon" />
            <span className="count">
              <span>1</span>
            </span>
            <GoPlus className="plus-icon" />
          </div>
        </td>
        <td className="product-subtotal">
          <span className="money">$400.00</span>
        </td>
        <td className="product-remove">
          <MdDelete style={{ fontSize: "18px" }} />
        </td>
      </tr>
    </tbody>
  );
};

export default BasketItem;
