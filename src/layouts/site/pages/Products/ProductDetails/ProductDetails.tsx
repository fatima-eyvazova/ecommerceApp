import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// react icons
import { IoIosArrowForward } from "react-icons/io";

import "./ProductDetails.scss";
import { SwiperProducts, MainLayout, ProductInfo } from "../../../components";
import TabItems from "../../../components/misc/Tabs/TabItems";
const ProductDetails: React.FC = () => {
  return (
    <MainLayout>
      <div className="product-details">
        <div className="container">
          <div className="product-content">
            <h2 className="title">Adquiera Mas</h2>
            <ul className="navigation">
              <li className="list">
                <Link className="link" to="/">
                  Home
                </Link>
                <IoIosArrowForward className="icon" />
              </li>
              <li className="active">
                <span>Adquiera Mas</span>
              </li>
            </ul>
          </div>
          {/*--------- Product-info------ */}
          <ProductInfo />
          {/* ------------Tab------------ */}
          <TabItems />

          {/* ----------Related Products-------- */}
          <section className="related-products">
            <div className="items">
              <div className="related-title">
                <h2>FEATURED FASHION DRESS</h2>
              </div>
              <div className="related-products-container">
                <SwiperProducts />
              </div>
            </div>
          </section>

          <section className="upsell-products">
            <div className="upsell-items">
              <div className="upsell-title">
                <h2>Upsell Products</h2>
              </div>
              <div className="upsell-products-container">
                <SwiperProducts />
              </div>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetails;
