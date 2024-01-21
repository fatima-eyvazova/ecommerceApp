import { IoAddOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import { CiCircleRemove } from "react-icons/ci";
import { useSelector } from "react-redux";

import "./ProductsDashboard.scss";
import {
  AddProduct,
  DeleteModal,
  ProductsTable,
  Sidebar,
} from "../../components";
import { RootState } from "../../../../redux/types";
import { makeRequest } from "../../../../services/api";
import { GetProductItem, GetProducts } from "./types";
import { GetBrandItem } from "../Brands/types";

const ProductsDashboard = () => {
  const [open, setOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(5);

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [totalCount, setTotalCount] = useState(0);

  const [updateList, setUpdateList] = useState(false);
  const [list, setList] = useState<GetProductItem[]>([]);
  const [brandList, setBrandsList] = useState<GetBrandItem[]>([]);

  const token = useSelector((state: RootState) => state.auth.token);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (token) {
      const fetchBrandsAndProducts = async () => {
        try {
          const res = await makeRequest(
            "/dashboard/brands",
            "get",
            null,
            token
          );
          const constructBrandQuery = selectedBrand
            ? `&brandId=${selectedBrand}`
            : "";
          const prRes = await makeRequest(
            `/dashboard/products?perPage=${perPage}&page=${
              page + 1
            }${constructBrandQuery}`,
            "get",
            null,
            token
          );
          const data = res?.data as { data: GetBrandItem[] };
          const prData = prRes?.data as { data: GetProducts };
          const products = prData?.data?.product;
          setTotalCount(prData?.data?.totalCount || 0);

          const brands = data?.data?.reverse();
          setBrandsList(brands);

          let productsWithBrandNames;
          if (products?.length && brands?.length) {
            for (const pr of products) {
              for (const br of brands) {
                if (pr?.brandId === br?._id) {
                  pr.brandName = br.name;
                }
              }
            }

            productsWithBrandNames = products?.reverse();
          }

          setList(productsWithBrandNames || products?.reverse());
        } catch (error) {
          console.error("Error fetching brands:", error);
        }
      };

      fetchBrandsAndProducts();
    }
  }, [token, updateList, page, perPage, selectedBrand]);

  const [searchInput, setSearchInput] = useState("");

  const fetchProducts = async () => {
    try {
      const res = await makeRequest("/dashboard/products", "get", null, token);
      const data = res?.data as { data: GetProductItem[] };
      setList(data?.data?.reverse());
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const searchProduct = () => {
    const filteredList = list.filter((product) =>
      product.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setList(filteredList);
  };

  const handleResetButtonClick = () => {
    setSearchInput("");
    fetchProducts();
  };

  const handleDeleteSelectedItems = () => {
    setOpenDeleteModal(true);
  };

  const handleOrderChange = (orderBy: "asc" | "disc") => {
    const sorted =
      orderBy === "asc"
        ? [...list].sort((a, b) => a.salePrice - b.salePrice)
        : [...list].sort((a, b) => b.salePrice - a.salePrice);
    setList(sorted);
  };

  return (
    <>
      <Sidebar>
        <div className="products-dashboard">
          <div className="products-top">
            <h1>Products</h1>
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
                  <AddProduct setOpen={setOpen} setUpdateList={setUpdateList} />
                </Drawer>
              </button>
            </div>
            <div className="products-filter">
              <input
                type="text"
                placeholder="Search Product"
                className="input-search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <select
                className="brand"
                value={selectedBrand}
                onChange={(e) => {
                  setSelectedBrand(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Select brand
                </option>
                {brandList?.map((brand) => (
                  <option key={brand?._id} value={brand?._id}>
                    {brand?.name}
                  </option>
                ))}
              </select>

              <select
                className="price"
                onChange={(e) => {
                  handleOrderChange(e.target.value as "asc" | "disc");
                }}
              >
                <option value="" disabled selected>
                  Select Order
                </option>
                <option value="asc">Low to High</option>
                <option value="disc">High to Low</option>
              </select>

              <div className="filter-reset">
                <button
                  className="filter-btn"
                  onClick={() => {
                    searchProduct();
                  }}
                >
                  Filter
                </button>
                <button className="reset-btn" onClick={handleResetButtonClick}>
                  Reset
                </button>
              </div>
            </div>
          </div>
          <div className="products-table">
            <ProductsTable
              list={list}
              selectedBrand={selectedBrand}
              selectedItems={selectedItems}
              setUpdateList={setUpdateList}
              setSelectedItems={setSelectedItems}
              totalCount={totalCount}
              page={page}
              perPage={perPage}
              setPage={setPage}
              setPerPage={setPerPage}
              setOpen={setOpen}
            />
          </div>
        </div>
      </Sidebar>
      {openDeleteModal && (
        <DeleteModal
          setOpenModal={setOpenDeleteModal}
          setUpdateList={setUpdateList}
          itemIdList={selectedItems}
          resource="products"
        />
      )}
    </>
  );
};

export default ProductsDashboard;
