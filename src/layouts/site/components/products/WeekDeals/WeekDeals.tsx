import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import "../WeekDeals/WeekDeals.scss";
import DiscountProduct from "../DiscountProduct/DiscountProduct";
import { makeRequest } from "../../../../../services/api";
import { GetProductItem } from "../../../../dashboard/pages/ProductsDashboard/types";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/types";

const WeekDeals = () => {
  const [remainingTime, setRemainingTime] = useState({
    days: 381,
    hours: 3,
    minutes: 20,
    seconds: 19,
  });
  const [products, setProducts] = useState<GetProductItem[]>([]);

  const { token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await makeRequest(
          "/site/products?perPage=100",
          "get",
          null,
          token
        );

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

  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingTime.seconds > 0) {
        setRemainingTime((prev) => ({ ...prev, seconds: prev.seconds - 1 }));
      } else {
        if (remainingTime.minutes > 0) {
          setRemainingTime((prev) => ({
            ...prev,
            minutes: prev.minutes - 1,
            seconds: 59,
          }));
        } else {
          if (remainingTime.hours > 0) {
            setRemainingTime((prev) => ({
              ...prev,
              hours: prev.hours - 1,
              minutes: 59,
            }));
          } else {
            if (remainingTime.days > 0) {
              setRemainingTime((prev) => ({
                ...prev,
                days: prev.days - 1,
                hours: 23,
              }));
            } else {
              console.log("Timer expired!");
              clearInterval(interval);
            }
          }
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingTime]);

  const slidesPerView =
    window.innerWidth <= 768 ? 1 : window.innerWidth <= 900 ? 1 : 2;

  return (
    <div className="week-deals">
      <div className="container">
        <div className="section-title">
          <h2>DEALS OF THE WEEK</h2>
        </div>
        <div className="timer">
          <div>
            <div className="item-timer">
              <span className="number">{remainingTime.days}</span>
              <span className="text">Days</span>
            </div>
            <div className="item-timer">
              <span className="number">{remainingTime.hours}</span>
              <span className="text">Hours</span>
            </div>
            <div className="item-timer">
              <span className="number">{remainingTime.minutes} </span>
              <span className="text">Min</span>
            </div>
            <div className="item-timer">
              <span className="number">{remainingTime.seconds}</span>
              <span className="text">Sec</span>
            </div>
          </div>
        </div>
        <div className="products-swiper">
          <Swiper
            slidesPerView={slidesPerView}
            // slidesPerView={2}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Pagination]}
            className="deals-swiper"
          >
            {products.slice(11, 16).map((product) => (
              <SwiperSlide className="slider" key={product?._id}>
                <DiscountProduct key={product._id} product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default WeekDeals;
