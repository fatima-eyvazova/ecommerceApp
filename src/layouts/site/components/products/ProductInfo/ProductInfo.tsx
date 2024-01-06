import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperRef } from "swiper";
import { useState, useRef } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { IoMdCheckboxOutline } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GrFavorite } from "react-icons/gr";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { TiSocialGooglePlus } from "react-icons/ti";
import { TbBrandPinterest } from "react-icons/tb";
import { CiStar } from "react-icons/ci";

import { useDispatch } from "react-redux";

import "./ProductInfo.scss";
import { addToBasket } from "../../../../../redux/slices/site/basketSlice";

const ProductInfo = () => {
  const [quantity, setQuantity] = useState<number>(1);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      addToBasket({ id: 1, price: 200, quantity, name: "Product 1111" })
    );
  };
  const swiper1Ref = useRef<SwiperRef | null>(null);

  return (
    <section className="product-info">
      <div className="images-swiper" style={{ width: "50vw" }}>
        <Swiper
          style={{
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          onSwiper={(swiper) => {
            if (swiper1Ref.current !== null) {
              swiper1Ref.current = swiper;
            }
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="swiper-details"
        >
          <SwiperSlide className="slide-item">
            <figure>
              <img src="/src/assets/images/1.webp" alt="swiper" />
            </figure>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <figure>
              <img src="/src/assets/images/2.webp" alt="swiper" />
            </figure>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <figure>
              <img
                src="/src/assets/images/3_861d7348-c426-4c39-9565-59e278a304ac.webp"
                alt="swiper"
              />
            </figure>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <figure>
              <img src="/src/assets/images/4.webp" alt="swiper" />
            </figure>
          </SwiperSlide>
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="swiper-images"
        >
          <SwiperSlide className="slide-image">
            <img src="/src/assets/images/1.webp" alt="swiper" />
          </SwiperSlide>
          <SwiperSlide className="slide-image">
            <img src="/src/assets/images/2.webp" alt="swiper" />
          </SwiperSlide>
          <SwiperSlide className="slide-image">
            <img
              src="/src/assets/images/3_861d7348-c426-4c39-9565-59e278a304ac.webp"
              alt="swiper"
            />
          </SwiperSlide>
          <SwiperSlide className="slide-image">
            <img src="/src/assets/images/4.webp" alt="swiper" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="product-details-info">
        <div className="info-content">
          <h4>Adquiera Mas</h4>
          <span>
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
          </span>
          <div className="prices">
            <div className="old-price">$ 180.00</div>
            <div className="new-price">$ 150.00</div>
          </div>
          <div className="in-stock">
            <IoMdCheckboxOutline className="icon-checkbox" />
            <span>In Stock</span>
          </div>
          <div className="sku">
            <span className="title">SKU#:</span>
            <span className="variant-sku">102511</span>
          </div>
          <p className="description">
            valle, la vivienda en la vigilancia específica, el reemplazo o la
            consolidación de la cama, un hombre obsesionado con la reducción de
            opciones de apuestas ilegales. Wow, mercado muy atractivo, de mis
            visitantes. Tiempo de desarrollo reciente para odiar, un bar beef
            tiempo.
          </p>
          <form className="cart-input">
            <label>Qty:</label>
            <input
              type="number"
              min={0}
              name="quantity"
              defaultValue={1}
              onChange={(event) => {
                setQuantity(+event.target.value);
              }}
            />
          </form>
          <div className="add-to-cart-favorites">
            <div className="add-to-cart" onClick={addToCart}>
              <HiOutlineShoppingBag className="add-icon" />
              <span className="add-btn"> Add to cart</span>
            </div>
            <div className="favorites">
              <GrFavorite className="favorite-icon" />
            </div>
          </div>
          <div className="social-share">
            <FaFacebookF className="icon" />
            <FaTwitter className="icon" />
            <TiSocialGooglePlus className="icon" />
            <TbBrandPinterest className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
