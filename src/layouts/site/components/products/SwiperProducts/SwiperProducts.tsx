import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

import "./SwiperProducts.scss";
import { ProductCard } from "../..";

const SwiperProducts = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="swiper-product"
    >
      <SwiperSlide className="slider">
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide className="slider">
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide className="slider">
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide className="slider">
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide className="slider">
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide className="slider">
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide className="slider">
        <ProductCard />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperProducts;
