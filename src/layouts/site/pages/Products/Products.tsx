import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { TablePagination } from "@mui/material";
import { useDebounce } from "use-debounce";
// react-icons
import { IoIosArrowForward } from "react-icons/io";

import {
  FilterAccardions,
  MainLayout,
  ProductCard,
  RatedProducts,
} from "../../components";
import "./Products.scss";
import { makeRequest } from "../../../../services/api";
import { RootState } from "../../../../redux/types";
import {
  GetProductItem,
  GetProducts,
} from "../../../dashboard/pages/ProductsDashboard/types";

const Products = () => {
  const [products, setProducts] = useState<GetProductItem[]>([]);
  const { token } = useSelector((state: RootState) => state.auth);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(5);
  const [totalCount, setTotalCount] = useState(0);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [minMaxPrice, setMinMaxPrice] = useState({ min: 0, max: 0 });
  const [minPriceValue] = useDebounce(minMaxPrice.min, 500);
  const [maxPriceValue] = useDebounce(minMaxPrice.max, 500);
  const [inOutStock, setInOutStock] = useState({
    inStock: false,
    outStock: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let constructedQuery = "";
        if (selectedBrands.length) {
          selectedBrands.forEach((brId) => {
            constructedQuery += `&brandId=${brId}`;
          });
        }

        if (minMaxPrice.min) {
          constructedQuery += `&minPrice=${minMaxPrice.min}`;
        }

        if (minMaxPrice.max) {
          constructedQuery += `&maxPrice=${minMaxPrice.max}`;
        }

        if (inOutStock.inStock) {
          constructedQuery += `&stock=inStock`;
        }

        if (inOutStock.outStock) {
          constructedQuery += `&stock=outStock`;
        }

        const res = await makeRequest(
          `/site/products?isPublish=true&perPage=${perPage}&page=${
            page + 1
          }${constructedQuery}`,
          "get",
          null,
          token
        );
        const prData = res?.data as { data: GetProducts };
        const dataArray = prData?.data?.product;
        setTotalCount(prData?.data?.totalCount || 0);

        if (Array.isArray(dataArray)) {
          setProducts(dataArray);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [
    token,
    page,
    perPage,
    selectedBrands.length,
    minPriceValue,
    maxPriceValue,
    inOutStock.inStock,
    inOutStock.outStock,
  ]);

  // useEffect(() => {
  //   const userRole = user?.role;
  //   if (userRole && userRole === "client") {
  //     getBasketFromDb(token).then((data: { data?: GetBasketItem[] }) => {
  //       const basketList = data?.data;
  //       if (!basketList || !basketList?.length) {
  //         postNewBasket(token);
  //       } else if (basketList.length) {
  //         setBasketDb(basketList);
  //       }
  //     });
  //   }
  // }, [token]);

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
                <FilterAccardions
                  setSelectedBrands={setSelectedBrands}
                  selectedBrands={selectedBrands}
                  setMinMaxPrice={setMinMaxPrice}
                  setInOutStock={setInOutStock}
                />
                <RatedProducts />
              </div>
              <div className="right">
                <div className="right-container">
                  <div className="shop-items">
                    {products.map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                  </div>
                </div>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={3}
                  count={totalCount}
                  rowsPerPage={perPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={(_, newPage) => {
                    if (page < 0) return null;
                    setPage(newPage);
                  }}
                  onRowsPerPageChange={(event) => {
                    setPerPage(parseInt(event.target.value, 10));
                    setPage(0);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Products;
