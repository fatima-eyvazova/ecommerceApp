import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";

import "./Checkout.scss";
import { ROUTES } from "../../../../router/routeNames";
import { RootState } from "../../../../redux/types";
import { CheckoutItem } from "../../components";
import { makeRequest } from "../../../../services/api";
import { clearBasket } from "../../../../redux/slices/site/basketSlice";

const Checkout = () => {
  const basketProducts = useSelector(
    (state: RootState) => state.basket.basketProducts
  );
  const total = useSelector((state: RootState) => state.basket.total);
  const token = useSelector((state: RootState) => state.auth.token);
  const disatch = useDispatch();

  const createNewOrder = async () => {
    const payload = {
      products: basketProducts?.map((pr) => ({
        productId: pr?._id,
        productCount: pr?.quantity,
      })),
    };
    const { data } = await makeRequest("/site/orders", "post", payload, token);
    if (data) {
      disatch(clearBasket());
    }
  };

  return (
    <div className="checkout">
      <header className="checkout-header">
        <div className="checkout-header-container">
          <h1>
            <Link className="logo" to="/">
              Dilan
            </Link>
          </h1>
          <div className="basket-link">
            <Link className="icon-basket" to={`/${ROUTES.basket}`}>
              <HiOutlineShoppingBag className="icon" />
            </Link>
          </div>
        </div>
      </header>
      <div className="wrapper-checkout">
        {basketProducts.length > 0 ? (
          <div className="checkout-container">
            <div className="checkout-content">
              <aside className="right">
                <div className="container-right">
                  <div className="basket-items">
                    {basketProducts.map((product) => (
                      <CheckoutItem key={product._id} {...product} />
                    ))}
                  </div>
                  <div className="basket-info">
                    <div className="info-total">
                      <span className="total-left">Total</span>
                      <div className="total-right">
                        <span className="usd">USD</span>
                        <span className="price">${total}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
            <div className="order-button">
              <button onClick={createNewOrder}>Complete order</button>
            </div>
          </div>
        ) : (
          <div className="order-total-empty">
            <h5>Your order has been received</h5>
            <Link className="text" to={ROUTES.home}>
              CONTINUE SHOPPING
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
