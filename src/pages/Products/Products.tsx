import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import MainLayout from "../../layout/MainLayout";

const Products = () => {
  return (
    <MainLayout>
      <div className="products">
        <div className="products-container">
          <div className="products-content">
            <h2 className="title">Adquiera Mas</h2>
            <ul className="navigation">
              <li className="list">
                <Link className="link" to="/">
                  Home
                </Link>
                <IoIosArrowForward className="icon-row" />
              </li>
              <li className="active">
                <span>Products</span>
              </li>
            </ul>
          </div>
          <div className="shopify">
            <div className="shopify-container">
              <div className="shop-sidebar"></div>
              <div className="right"></div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Products;
