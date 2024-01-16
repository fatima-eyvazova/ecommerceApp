import { IoAddOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import { CiCircleRemove } from "react-icons/ci";

import { BrandsTable, Sidebar } from "../../components";
import AddEditBrand from "../../components/Brands/AddEditBrand/AddEditBrand";
import { makeRequest } from "../../../../services/api";
import "./Brands.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/types";
import { GetBrandItem } from "./types";

const Brand = () => {
  const [open, setOpen] = useState(false);
  const [updateList, setUpdateList] = useState(false);
  const [list, setList] = useState<GetBrandItem[]>([]);
  const token = useSelector((state: RootState) => state.auth.token);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (token) {
      makeRequest("/dashboard/brands", "get", null, token).then((res) => {
        const data = res?.data as { data: GetBrandItem[] };
        setList(data?.data?.reverse());
      });
    }
  }, [token, updateList]);

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
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
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
                  <AddEditBrand
                    setOpen={setOpen}
                    setUpdateList={setUpdateList}
                  />
                </Drawer>
              </button>
            </div>
          </div>
        </div>
        <div className="products-table">
          <BrandsTable
            list={list}
            setOpen={setOpen}
            setUpdateList={setUpdateList}
          />
        </div>
      </div>
    </Sidebar>
  );
};

export default Brand;
