import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IoAddOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import Drawer from "@mui/material/Drawer";
import { CiCircleRemove } from "react-icons/ci";

import { BrandsTable, DeleteModal, Sidebar } from "../../components";
import AddEditBrand from "../../components/Brands/AddEditBrand/AddEditBrand";
import { makeRequest } from "../../../../services/api";
import { RootState } from "../../../../redux/types";
import { GetBrandItem } from "./types";
import "./Brands.scss";

const Brand = () => {
  const [open, setOpen] = useState(false);
  const [updateList, setUpdateList] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [list, setList] = useState<GetBrandItem[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const token = useSelector((state: RootState) => state.auth.token);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  const fetchBrands = async () => {
    try {
      const res = await makeRequest("/dashboard/brands", "get", null, token);
      const data = res?.data as { data: GetBrandItem[] };
      setList(data?.data?.reverse());
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchBrands();
    }
  }, [token, updateList]);

  const searchBrand = () => {
    const filteredList = list.filter((brand) =>
      brand.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setList(filteredList);
  };

  const handleResetButtonClick = () => {
    setSearchInput("");
    fetchBrands();
  };

  const handleDeleteSelectedItems = async () => {
    for (const itemId of selectedItems) {
      await makeRequest(`/dashboard/brands/${itemId}`, "delete", null, token);
    }
    await fetchBrands();
  };

  return (
    <>
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
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <div className="filter-reset">
                  <button
                    className="filter-btn"
                    onClick={() => {
                      searchBrand();
                    }}
                  >
                    Filter
                  </button>
                  <button
                    className="reset-btn"
                    onClick={handleResetButtonClick}
                  >
                    Reset
                  </button>
                </div>
              </div>
              <div className="delete-add">
                <button className="delete" onClick={handleDeleteSelectedItems}>
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
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
            />
          </div>
        </div>
      </Sidebar>
      {openDeleteModal && (
        <DeleteModal
          setOpenModal={setOpenDeleteModal}
          setUpdateList={setUpdateList}
          itemIdList={selectedItems}
          resource="brands"
        />
      )}
    </>
  );
};

export default Brand;
