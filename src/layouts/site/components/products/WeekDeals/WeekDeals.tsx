import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import "../WeekDeals/WeekDeals.scss";
import DiscountProduct from "../DiscountProduct/DiscountProduct";

const WeekDeals = () => {
  const [remainingTime, setRemainingTime] = useState({
    days: 381,
    hours: 3,
    minutes: 20,
    seconds: 19,
  });

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

  return (
    <div className="week-deals">
      <div className="container">
        <div className="section-title">
          <h2>DEALS OF THE WEEK</h2>
        </div>
        <div className="timer">
          <div>
            <div className="item">
              <span className="number">{remainingTime.days}</span>
              <span className="text">Days</span>
            </div>
            <div className="item">
              <span className="number">{remainingTime.hours}</span>
              <span className="text">Hours</span>
            </div>
            <div className="item">
              <span className="number">{remainingTime.minutes} </span>
              <span className="text">Min</span>
            </div>
            <div className="item">
              <span className="number">{remainingTime.seconds}</span>
              <span className="text">Sec</span>
            </div>
          </div>
        </div>
        <div className="products-swiper">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Pagination]}
            className="deals-swiper"
          >
            <SwiperSlide className="slide">
              <DiscountProduct />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <DiscountProduct />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <DiscountProduct />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <DiscountProduct />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <DiscountProduct />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default WeekDeals;
