import { useDispatch, useSelector } from "react-redux";
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
import { BasketProduct, RootState } from "../../../../../redux/types";
import { makeRequest } from "../../../../../services/api";
import { GetBasketItem } from "../../../pages/Auth/Login/Login";
import { useState } from "react";

type Props = {
  product: BasketProduct;
  basketItem: GetBasketItem | null;
};

const BasketItem = ({ product, basketItem }: Props) => {
  const [updating, setUpdating] = useState(false);
  const { token, user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const removeItemFromDb = async () => {
    try {
      const resBasket = await makeRequest(
        `/site/basket/${basketItem?._id}`,
        "delete",
        null,
        token
      );
      return resBasket;
    } catch (error) {
      console.error("Error posting basket:", error);
    }
  };

  const updateItemInDb = async (action: "inc" | "dec") => {
    try {
      if (basketItem) {
        const resBasket = await makeRequest(
          `/site/basket/${basketItem?._id}`,
          "put",
          {
            productCount:
              action === "inc"
                ? basketItem?.productCount + 1
                : basketItem?.productCount - 1,
          },
          token
        );
        return resBasket;
      }
    } catch (error) {
      console.error("Error posting basket:", error);
    }
  };

  const handleIncreaseQuantity = async () => {
    setUpdating(true);
    if (token && user?.role === "client") {
      await updateItemInDb("inc");
    }
    dispatch(addToBasket({ ...product, quantity: 1 }));
    setUpdating(false);
  };

  const removeItemFromBasket = async () => {
    if (token && user?.role === "client" && basketItem) {
      await removeItemFromDb();
    }
    dispatch(removeItem({ _id: product?._id, subtotal: product?.subtotal }));
  };

  const decreaseItemByOne = async () => {
    setUpdating(true);
    if (token && user?.role === "client" && basketItem) {
      if (basketItem?.productCount > 1) {
        await updateItemInDb("dec");
      } else if (basketItem?.productCount === 1) {
        await removeItemFromDb();
      }
    }
    dispatch(
      decreaseItem({
        _id: product?._id,
        price: product?.salePrice || product?.productPrice,
      })
    );
    setUpdating(false);
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
        <td className="product-name">{product?.title?.slice(0, 18)}...</td>
        <td className="product-price-cart">
          <span className="money">${product?.salePrice}</span>
        </td>
        <td className="product-quantity">
          <div className="cart-plus-minus">
            <LuMinus
              className="minus-icon"
              onClick={!updating && decreaseItemByOne}
            />
            <span className="count">
              <span>{product?.quantity}</span>
            </span>
            <GoPlus
              className="plus-icon"
              onClick={!updating && handleIncreaseQuantity}
            />
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
