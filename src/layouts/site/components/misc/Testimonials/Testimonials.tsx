import { Link } from "react-router-dom";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
// react icons
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

import "./Testimonials.scss";
const Testimonials = () => {
  return (
    <div className="new-collection-testimonials">
      <div className="container">
        <div className="new-collection">
          <img src="src/assets/images/banner-7.webp" alt="collection" />
          <div className="new-collection-content">
            <h2>
              Accent Your <br />
              Style with <br />
              New Collection
            </h2>
            <Link to="/" className="new-collection-btn">
              View Collections
            </Link>
          </div>
        </div>
        <div className="testimonials">
          <div className="section-title">
            <h2>Testimonials</h2>
          </div>
          <div className="swiper-testimonials">
            <Swiper
              spaceBetween={30}
              navigation={{
                prevEl: ".prev-button",
                nextEl: ".next-button",
              }}
              pagination={{
                clickable: true,
              }}
              modules={[EffectFade, Navigation, Pagination]}
              className="swiper-elements"
            >
              <SwiperSlide className="slide-item">
                <p>
                  “ Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudant totam rem aperiam,
                  eaque ipsa quae ab illo inventore veritatis et voluptas. ”
                </p>
                <h4>Douglas Allen - CEO</h4>
              </SwiperSlide>
              <SwiperSlide className="slide-item">
                <p>
                  “ Perfect Themes and the best of all that you have many
                  options to choose! Best Support team ever!Very fast responding
                  and experts on their fields! Thank you very much! ”
                </p>
                <h4>Stefano Colombarolli - CEO</h4>
              </SwiperSlide>
              <SwiperSlide className="slide-item">
                <p>
                  “ I'm so happy with all of the themes, great support, could
                  not wish for more. These people are geniuses! aperiam, eaque
                  ipsa quae ab illo inventore veritatis et voluptas. ”
                </p>
                <h4>Teresa McDonald - CEO</h4>
              </SwiperSlide>
              <SwiperSlide className="slide-item">
                <p>
                  “ Perfect Themes and the best of all that you have many
                  options to choose! Best Support team ever!Very fast responding
                  and experts on their fields! Thank you very much! ”
                </p>
                <h4>Stefano Colombarolli - CEO</h4>
              </SwiperSlide>

              <div className="buttons-swiper">
                <div className="prev-button">
                  <HiArrowLongLeft className="swiper-icons-nav" />
                </div>
                <div className="next-button">
                  <HiArrowLongRight className="swiper-icons-nav" />
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
