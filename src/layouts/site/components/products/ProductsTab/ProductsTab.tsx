import { SwiperProducts } from "../..";
import "../ProductsTab/ProductsTab.scss";

const ProductsTab = () => {
  return (
    <div className="products-tab">
      <div className="products-tab-container">
        <SwiperProducts />
      </div>
    </div>
  );
};

export default ProductsTab;
