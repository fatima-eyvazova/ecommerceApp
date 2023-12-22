// react-router-dom
import { Link } from "react-router-dom";

import { BasketItem } from "../../components";

import "./Basket.scss";
function Basket() {
  return (
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
                  <BasketItem />
                  <BasketItem />
                </table>
              </div>
              <div className="continue-clear">
                <div className="basket-continue">
                  <Link to="/" className="basket-link">
                    Continue Shopping
                  </Link>
                </div>
                <div className="basket-clear">
                  <Link to="/" className="basket-link">
                    Clear Shopping Cart
                  </Link>
                </div>
              </div>
            </div>
            <div className="grand-totall">
              <h5>
                <span className="total-text">Grand Total: </span>
                <span className="money">$400.00</span>
              </h5>
              <Link to="/cekout" className="checkout">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
