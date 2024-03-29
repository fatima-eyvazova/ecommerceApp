import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
// react icons
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

import "./SwiperProducts.scss";
import { ProductCard } from "../..";
import { useEffect, useState } from "react";
import { RootState } from "../../../../../redux/types";
import { useSelector } from "react-redux";
import {
  GetProductItem,
  GetProducts,
} from "../../../../dashboard/pages/ProductsDashboard/types";
import { makeRequest } from "../../../../../services/api";
import { GetBasketItem } from "../../../pages/Auth/Login/Login";

const SwiperProducts = ({ basketDb }: { basketDb: GetBasketItem[] }) => {
  const [products, setProducts] = useState<GetProductItem[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [perPage, setPerPage] = useState(5);

  const { token } = useSelector((state: RootState) => state.auth);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await makeRequest("/site/products", "get", null, token);

  //       const dataArray = res?.data?.data?.product;
  //       if (Array.isArray(dataArray)) {
  //         setProducts(dataArray);
  //       } else {
  //         console.error("Invalid data received:", res?.data?.data?.product);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };
  //   fetchData();
  // }, [token]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await makeRequest(
          "/site/products?perPage=100",
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
  }, [token, perPage]);

  return (
    <div className="swiper-elements">
      <div className="custom-buttons">
        <div className="custom-prev-button">
          <FaArrowLeftLong />
        </div>
        <div className="custom-next-button">
          <FaArrowRightLong />
        </div>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".custom-prev-button",
          nextEl: ".custom-next-button",
        }}
        modules={[Pagination, Navigation]}
        className="swiper-product"
      >
        {products.slice(1, 10).map((product) => (
          <SwiperSlide className="slider" key={product?._id}>
            <ProductCard
              key={product._id}
              product={product}
              basketItem={
                basketDb?.find((item) => item?.productId === product?._id) ||
                null
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperProducts;
