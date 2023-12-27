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
const RatedProducts = () => {
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
                {data.slice(0, 3).map((item) => (
                  <div className="rated-item" key={item.id}>
                    <img
                      src="/src/assets/images/3_861d7348-c426-4c39-9565-59e278a304ac.webp"
                      alt="shop"
                    />
                    <div className="rated-content">
                      <h4>{item.name}</h4>
                      <span className="money">$ {item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide className="rated-slide">
              <div className="rated-items">
                {data.slice(3, 7).map((item) => (
                  <div className="rated-item" key={item.id}>
                    <img
                      src="/src/assets/images/3_861d7348-c426-4c39-9565-59e278a304ac.webp"
                      alt="shop"
                    />
                    <div className="rated-content">
                      <h4>{item.name}</h4>
                      <span className="money">$ {item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide className="rated-slide">
              <div className="rated-items">
                {data.slice(3, 7).map((item) => (
                  <div className="rated-item" key={item.id}>
                    <img
                      src="/src/assets/images/3_861d7348-c426-4c39-9565-59e278a304ac.webp"
                      alt="shop"
                    />
                    <div className="rated-content">
                      <h4>{item.name}</h4>
                      <span className="money">$ {item.price}</span>
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
