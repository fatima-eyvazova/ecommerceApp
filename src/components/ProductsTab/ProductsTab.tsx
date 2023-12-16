import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

import "../ProductsTab/ProductsTab.scss";
import { ProductCard } from "..";

const ProductsTab = () => {
  return (
    <div className="products-tab">
      <div className="products-tab-container">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
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
      </div>
    </div>
  );
};

export default ProductsTab;
