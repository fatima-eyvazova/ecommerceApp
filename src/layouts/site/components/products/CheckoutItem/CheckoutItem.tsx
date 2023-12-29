import "./CheckoutItem.scss";
type Props = {
  name: string;
  price: number;
  quantity: number;
};
const CheckoutItem = ({ name, price, quantity }: Props) => {
  return (
    <div className="basket-item">
      <div className="image-count-text">
        <div className="image-count">
          <img
            src="/src/assets/images/3_861d7348-c426-4c39-9565-59e278a304ac.webp"
            alt="basket"
            className="basket-img"
          />
          <div className="count">
            <span>{quantity}</span>
          </div>
        </div>
        <h5 className="item-name">{name}</h5>
      </div>

      <div className="price">
        <span>$ {price}</span>
      </div>
    </div>
  );
};

export default CheckoutItem;
