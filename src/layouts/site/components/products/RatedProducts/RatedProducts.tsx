// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
// react icons
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

import "./RatedProducts.scss";
import {
  GetProductItem,
  GetProducts,
} from "../../../../dashboard/pages/ProductsDashboard/types";
import { useEffect, useState } from "react";
import { makeRequest } from "../../../../../services/api";
import { RootState } from "../../../../../redux/types";
import { useSelector } from "react-redux";
const RatedProducts = () => {
  const [products, setProducts] = useState<GetProductItem[]>([]);
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
    <div className="rated-products">
      <div className="rated-products-container">
        <div className="rated-swiper-wrapper">
          <Swiper
            rewind={true}
            navigation={{
              prevEl: ".swipper-prev-button",
              nextEl: ".swipper-next-button",
            }}
            modules={[Navigation]}
            className="rated-swiper"
          >
            <SwiperSlide className="rated-slide">
              <div className="rated-items">
                {products.slice(0, 3).map((item) => (
                  <div className="rated-item" key={item.id}>
                    {item.images && item.images.length > 0 && (
                      <img src={item.images[0].url} alt={item.name} />
                    )}
                    <div className="rated-content">
                      <h4>{item?.title}</h4>
                      <span className="money">$ {item?.productPrice}</span>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide className="rated-slide">
              <div className="rated-items">
                {products.slice(3, 7).map((item) => (
                  <div className="rated-item" key={item.id}>
                    {item.images && item.images.length > 0 && (
                      <img src={item.images[0].url} alt={item.name} />
                    )}
                    <div className="rated-content">
                      <h4>{item?.title}</h4>
                      <span className="money">$ {item?.productPrice}</span>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide className="rated-slide">
              <div className="rated-items">
                {products.slice(7, 11).map((item) => (
                  <div className="rated-item" key={item._id}>
                    {item.images && item.images.length > 0 && (
                      <img src={item.images[0].url} alt={item.name} />
                    )}
                    <div className="rated-content">
                      <h4>{item?.title}</h4>
                      <span className="money">$ {item?.productPrice}</span>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
            <div className="info-rated">
              <h4 className="rated-title">Top Rated Product</h4>

              <div className="buttons-swipper">
                <div className="swipper-prev-button">
                  <FaArrowLeftLong className="icon-btn" />
                </div>
                <div className="swipper-next-button">
                  <FaArrowRightLong className="icon-btn" />
                </div>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default RatedProducts;
