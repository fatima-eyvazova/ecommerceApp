import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

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
              effect={"fade"}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[EffectFade, Navigation, Pagination]}
              className="swiper-elements"
            >
              <SwiperSlide className="slide">
                <p>
                  “ Perfect Themes and the best of all that you have many
                  options to choose! Best Support team ever!Very fast responding
                  and experts on their fields! Thank you very much! ”
                </p>
                <h4>Stefano Colombarolli - CEO</h4>
              </SwiperSlide>
              <SwiperSlide className="slide">
                <p>
                  “ Perfect Themes and the best of all that you have many
                  options to choose! Best Support team ever!Very fast responding
                  and experts on their fields! Thank you very much! ”
                </p>
                <h4>Stefano Colombarolli - CEO</h4>
              </SwiperSlide>
              <SwiperSlide className="slide">
                <p>
                  “ Perfect Themes and the best of all that you have many
                  options to choose! Best Support team ever!Very fast responding
                  and experts on their fields! Thank you very much! ”
                </p>
                <h4>Stefano Colombarolli - CEO</h4>
              </SwiperSlide>
              <SwiperSlide className="slide">
                <p>
                  “ Perfect Themes and the best of all that you have many
                  options to choose! Best Support team ever!Very fast responding
                  and experts on their fields! Thank you very much! ”
                </p>
                <h4>Stefano Colombarolli - CEO</h4>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
