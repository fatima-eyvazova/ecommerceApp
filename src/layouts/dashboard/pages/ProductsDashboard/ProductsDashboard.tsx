import { IoAddOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { CiCircleRemove } from "react-icons/ci";

import { AddProduct, ProductsTable, Sidebar } from "../../components";
import "./ProductsDashboard.scss";
const ProductsDashboard = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const closeDrawer = () => {
    setOpen(false);
  };
  return (
    <Sidebar>
      <div className="products-dashboard">
        <div className="products-top">
          <h1>Products</h1>
          <div className="delete-add">
            <button className="delete">
              <RiDeleteBin6Line />
              <span className="text-delete">Delete</span>
            </button>
            <button
              className="add"
              onClick={toggleDrawer}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <IoAddOutline />
              <span className="text-add">Add Product</span>
              <Drawer
                anchor="right"
                open={open}
                onClose={closeDrawer}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <CiCircleRemove
                  style={{
                    fontSize: "24px",
                    position: "absolute",
                    right: "50px",
                    top: "30px",
                    cursor: "pointer",
                    color: "red",
                  }}
                  onClick={closeDrawer}
                />
                <AddProduct />
              </Drawer>
            </button>
          </div>
          <div className="products-filter">
            <input
              type="text"
              placeholder="Search Product"
              className="input-search"
            />
            <select className="brand">
              <option value="Nike">Nike</option>
              <option value="Stradivarius">Stradivarius</option>
              <option value="Gucci">Gucci</option>
              <option value="Zara">Zara</option>
              <option value="Bershka">Bershka</option>
            </select>

            <select className="price">
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>

            <div className="filter-reset">
              <button className="filter-btn">Filter</button>
              <button className="reset-btn">Reset</button>
            </div>
          </div>
        </div>
        <div className="products-table">
          <ProductsTable />
        </div>
      </div>
    </Sidebar>
  );
};

export default ProductsDashboard;
