// react-router-dom
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { BasketItem, MainLayout } from "../../components";
import "./Basket.scss";
import { RootState } from "../../../../redux/types";
import { clearBasket } from "../../../../redux/slices/basketSlice";

function Basket() {
  const basketProducts = useSelector(
    (state: RootState) => state.basket.basketProducts
  );
  const total = useSelector((state: RootState) => state.basket.total);
  const dispatch = useDispatch();

  const clearBasketItems = () => {
    dispatch(clearBasket());
  };

  return (
    <MainLayout>
      <div className="basket">
        <div className="basket-container">
          <div className="basket-heading">
            <h2>Your Shopping Cart</h2>
          </div>
          <div className="basket-content">
            <div className="container">
              <h3 className="page-title">YOUR CART ITEMS</h3>
              <div className="basket-items">
                <div className="items-table">
                  <table>
                    <thead>
                      <tr>
                        <th>IMAGE</th>
                        <th>PRODUCT NAME</th>
                        <th>UNTIL PRICE</th>
                        <th>QTY</th>
                        <th>SUBTOTAL</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    {basketProducts.map((product) => (
                      <BasketItem key={product.id} {...product} />
                    ))}
                  </table>
                </div>
                <div className="continue-clear">
                  <div className="basket-continue">
                    <Link to="/" className="basket-link">
                      Continue Shopping
                    </Link>
                  </div>
                  <div className="basket-clear" onClick={clearBasketItems}>
                    <span className="basket-link">Clear Shopping Cart</span>
                  </div>
                </div>
              </div>
              <div className="grand-totall">
                <h5>
                  <span className="total-text">Grand Total: </span>
                  <span className="money">${total?.toFixed(2) || 0}</span>
                </h5>
                <Link to="/cekout" className="checkout">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Basket;
