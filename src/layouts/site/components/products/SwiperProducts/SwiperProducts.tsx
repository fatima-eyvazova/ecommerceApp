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

const SwiperProducts = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
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
      {data.map((product) => (
        <SwiperSlide className="slider" key={product.id}>
          <ProductCard {...product} />
        </SwiperSlide>
      ))}
      <div className="custom-prev-button">
        <FaArrowLeftLong />
      </div>
      <div className="custom-next-button">
        <FaArrowRightLong />
      </div>
    </Swiper>
  );
};

export default SwiperProducts;
