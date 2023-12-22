import { SwiperProducts } from "../..";
import "./Featured.scss";
const Featured = () => {
  return (
    <section className="featured">
      <div className="products">
        <div className="section-title">
          <h2>FEATURED FASHION DRESS</h2>
        </div>
        <div className="products-container">
          <SwiperProducts />
        </div>
      </div>
    </section>
  );
};

export default Featured;
