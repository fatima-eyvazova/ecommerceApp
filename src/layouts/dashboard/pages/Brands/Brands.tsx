import { IoAddOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { CiCircleRemove } from "react-icons/ci";

import { BrandsTable, Sidebar } from "../../components";
import "./Brands.scss";
import AddBrand from "../../components/Brands/AddBrand/AddBrand";
const Brand = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const closeDrawer = () => {
    setOpen(false);
  };
  return (
    <Sidebar>
      <div className="brand-dashboard">
        <div className="brand-top">
          <h1>Brands</h1>
          <div className="brands-filter">
            <div className="brand-filter">
              <input
                type="text"
                placeholder="Search Product"
                className="input-search"
              />

              <div className="filter-reset">
                <button className="filter-btn">Filter</button>
                <button className="reset-btn">Reset</button>
              </div>
            </div>
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
                <span className="text-add">Add Brand</span>
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
                  <AddBrand setOpen={setOpen} />
                </Drawer>
              </button>
            </div>
          </div>
        </div>
        <div className="products-table">
          <BrandsTable />
        </div>
      </div>
    </Sidebar>
  );
};

export default Brand;
