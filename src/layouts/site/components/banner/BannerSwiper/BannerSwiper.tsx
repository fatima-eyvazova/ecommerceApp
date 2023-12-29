// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import "../BannerSwiper/BannerSwiper.scss";

const BannerSwiper = () => {
  return (
    <div className="banner-swiper">
      <div className="container">
        <div className="swiper">
          <Swiper
            className="swiper-banner"
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
          >
            <SwiperSlide className="swiper-slide">
              <div className="slider-banner">
                <img src="src/assets/images/banner-img.jpeg" alt="banner" />
                <div className="slider-content">
                  <h3>New Arrivals</h3>
                  <h2 className="title">
                    Women’s
                    <span>fashion</span>
                  </h2>
                  <div className="slider-btn">
                    <span className="animated">Shop Now</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slider-banner">
                <img src="src/assets/images/2.jpeg" alt="banner" />
                <div className="slider-content">
                  <h3>New Arrivals</h3>
                  <h2 className="title">
                    Women’s
                    <span>fashion</span>
                  </h2>
                  <div className="slider-btn">
                    <span className="animated">Shop Now</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="banner-discount">
          <img src="src/assets/images/1_432x.jpeg" alt="photo" />
          <div className="banner-content">
            <h3>
              autumn <br />
              50 % <br />
              Off
            </h3>
            <div className="banner-btn">
              <span>Shop Now!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSwiper;
