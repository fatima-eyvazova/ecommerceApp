import { Link } from "react-router-dom";
// react-icons
import { IoIosArrowForward } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { IoIosMenu } from "react-icons/io";

import {
  FilterAccardions,
  MainLayout,
  ProductCard,
  RatedProducts,
} from "../../components";
import "./Products.scss";
import { makeRequest } from "../../../../services/api";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/types";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  const { token } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await makeRequest("/site/products", "get", null, token);

        const dataArray = res?.data?.data?.product;
        if (Array.isArray(dataArray)) {
          setProducts(dataArray);
        } else {
          console.error("Invalid data received:", res?.data?.data?.product);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [token]);
  return (
    <MainLayout>
      <div className="products">
        <div className="products-container">
          <div className="products-content">
            <h2 className="title">Products</h2>
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
              <div className="left">
                <div className="filter-title">
                  <h4>Categories</h4>
                </div>
                <FilterAccardions />
                <RatedProducts />
              </div>
              <div className="right">
                <div className="right-container">
                  <div className="shop-topbar-wrapper">
                    <ul className="view-mode">
                      <li>
                        <Link to="/" className="icon-view">
                          <CgMenuGridR className="icon" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="icon-view change">
                          <IoIosMenu className="icon" />
                        </Link>
                      </li>
                    </ul>
                    <div className="product-sorting">
                      <form>
                        <label>Sort by: </label>
                        <select name="SortBy" id="SortBy">
                          <option>Alphabetically, A-Z</option>
                          <option>Alphabetically, Z-A</option>
                          <option>Price, low to high</option>
                          <option>Price, high to low</option>
                        </select>
                      </form>
                    </div>
                  </div>
                  <div className="shop-items">
                    {products.map((product) => (
                      <ProductCard {...product} key={product.id} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Products;
