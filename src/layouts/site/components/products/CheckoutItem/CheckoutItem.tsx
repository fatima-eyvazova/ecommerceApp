import { BasketProduct } from "../../../../../redux/types";
import "./CheckoutItem.scss";
// type Props = {
//   name: string;
//   price: number;
//   quantity: number;
// };
const CheckoutItem = (product: BasketProduct) => {
  const image = product?.images?.[0] as {
    url: string;
    public_id: string;
  };

  return (
    <div className="basket-item">
      <div className="image-count-text">
        <div className="image-count">
          <img src={image?.url} alt="basket" className="basket-img" />
          <div className="count">
            <span>{product?.quantity}</span>
          </div>
        </div>
        <h5 className="item-name">{product?.title}</h5>
      </div>

      <div className="price">
        <span>$ {product?.salePrice}</span>
      </div>
    </div>
  );
};

export default CheckoutItem;
