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
import { IoAlertOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GrFavorite } from "react-icons/gr";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { TiSocialGooglePlus } from "react-icons/ti";
import { TbBrandPinterest } from "react-icons/tb";
import { CiStar } from "react-icons/ci";

import { useDispatch, useSelector } from "react-redux";

import "./ProductInfo.scss";
import { addToBasket } from "../../../../../redux/slices/site/basketSlice";
import { GetProductItem } from "../../../../dashboard/pages/ProductsDashboard/types";
import { RootState } from "../../../../../redux/types";
import { handleWishList as handleWishListAction } from "../../../../../redux/slices/site/wishListSlice";

type ProductInfoProps = {
  product: GetProductItem;
};

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const dispatch = useDispatch();

  const wishListProducts = useSelector(
    (state: RootState) => state.wishList.wishListProducts
  );
  const isFoundElement = wishListProducts.some(
    (item) => item._id === product?._id
  );
  const [color, setColor] = useState<boolean>(isFoundElement);

  const addToCart = () => {
    dispatch(
      addToBasket({
        ...product,
        quantity,
      })
    );
  };

  const swiper1Ref = useRef<SwiperRef | null>(null);
  const productImages = product?.images as { url: string; public_id: string }[];

  const handleWishList = () => {
    dispatch(handleWishListAction(product));
    setColor((prev) => !prev);
  };

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
          {productImages?.map((image) => (
            <SwiperSlide className="slide-item" key={image.public_id}>
              <figure>
                <img src={image?.url} alt="swiper" />
              </figure>
            </SwiperSlide>
          ))}
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
          {productImages?.map((image) => (
            <SwiperSlide className="slide-image">
              <figure>
                <img src={image?.url} alt="swiper" />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="product-details-info">
        <div className="info-content">
          <h4>{product?.title}</h4>

          <div className="prices">
            <div className="old-price">$ 180.00</div>
            <div className="new-price">$ 150.00</div>
          </div>
          <div className="in-stock">
            {
              <>
                {product?.stock > 0 ? (
                  <IoMdCheckboxOutline className="icon-checkbox" />
                ) : (
                  <IoAlertOutline />
                )}
              </>
            }
            <span>{product?.stock > 0 ? "In Stock" : "Out of Stock"}</span>
          </div>
          <p className="description">{product?.description}</p>
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
            <div className="favorites" onClick={handleWishList}>
              <GrFavorite
                className="favorite-icon"
                style={{ color: color ? "red" : "black" }}
              />
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
