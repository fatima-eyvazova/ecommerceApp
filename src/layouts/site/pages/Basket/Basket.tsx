// react-router-dom
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { BasketItem, MainLayout } from "../../components";
import "./Basket.scss";
import { RootState } from "../../../../redux/types";
import { clearBasket } from "../../../../redux/slices/site/basketSlice";
import { ROUTES } from "../../../../router/routeNames";
import { makeRequest } from "../../../../services/api";
import { useEffect, useState } from "react";
import { GetBasketItem } from "../Auth/Login/Login";

function Basket() {
  const basketProducts = useSelector(
    (state: RootState) => state.basket.basketProducts
  );
  const total = useSelector((state: RootState) => state.basket.total);
  const { token, user } = useSelector((state: RootState) => state.auth);
  const [basketDb, setBasketDb] = useState<GetBasketItem[]>([]);
  const dispatch = useDispatch();

  const removeItemFromDb = async (id: string) => {
    try {
      const resBasket = await makeRequest(
        `/site/basket/${id}`,
        "delete",
        null,
        token
      );
      return resBasket;
    } catch (error) {
      console.error("Error deleting item from basket:", error);
    }
  };

  const clearBasketItems = async () => {
    if (basketDb.length) {
      for (const item of basketDb) {
        await removeItemFromDb(item?._id);
      }
    }

    dispatch(clearBasket());
  };

  const getBasketFromDb = async (token: string) => {
    try {
      const resBasket = await makeRequest("/site/basket", "get", null, token);
      return resBasket;
    } catch (error) {
      console.error("Error posting basket:", error);
    }
  };

  useEffect(() => {
    if (token && user?.role === "client") {
      getBasketFromDb(token).then((res) => {
        const dbBasketList = res?.data as {
          data: GetBasketItem[];
        };
        if (dbBasketList?.data) {
          setBasketDb(dbBasketList.data);
        }
      });
    }
  }, [token]);

  return (
    <MainLayout>
      <div className="basket">
        <div className="basket-container">
          <div className="basket-heading">
            <h2>Your Shopping Cart</h2>
          </div>
          <div className="basket-content">
            <div className="content-container">
              <h3 className="page-title">YOUR CART ITEMS</h3>
              {basketProducts.length > 0 ? (
                <>
                  <div className="basket-items">
                    <div className="items-table">
                      <table>
                        <thead>
                          <tr>
                            <th>IMAGE</th>
                            <th>PRODUCT NAME</th>
                            <th>PRICE</th>
                            <th>QTY</th>
                            <th>SUBTOTAL</th>
                            <th>Remove</th>
                          </tr>
                        </thead>
                        {basketProducts.map((product) => (
                          <BasketItem
                            key={product._id}
                            product={product}
                            basketItem={
                              basketDb?.find(
                                (item) => item?.productId === product?._id
                              ) || null
                            }
                          />
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
                    <Link to={`/${ROUTES.checkout}`} className="checkout">
                      Proceed to Checkout
                    </Link>
                  </div>
                </>
              ) : (
                <div className="grand-total-empty">
                  <h5>Your cart is currently empty.</h5>
                  <Link className="text" to={ROUTES.home}>
                    CONTINUE SHOPPING
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Basket;
