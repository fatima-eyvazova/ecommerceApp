import { Link } from "react-router-dom";
// react-icons
import { IoIosArrowForward } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { IoIosMenu } from "react-icons/io";

import { FilterAccardions, MainLayout, ProductCard } from "../../components";
import "./Products.scss";

const Products = () => {
  const data = [
    {
      id: 1,
      name: "Product 111",
      price: 200.0,
    },
    {
      id: 2,
      name: "Product 222",
      price: 400.0,
    },
    {
      id: 3,
      name: "Product 333",
      price: 340.0,
    },
    {
      id: 4,
      name: "Product 444",
      price: 50.0,
    },
    {
      id: 5,
      name: "Product 555",
      price: 180.0,
    },
    {
      id: 6,
      name: "Product 666",
      price: 90.0,
    },
  ];
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
                    {data.map((product) => (
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
