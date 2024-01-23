import { SwiperProducts } from "../..";
import { GetBasketItem } from "../../../pages/Auth/Login/Login";
import "../ProductsTab/ProductsTab.scss";

const ProductsTab = ({ basketDb }: { basketDb: GetBasketItem[] }) => {
  return (
    <div className="products-tab">
      <div className="products-tab-container">
        <SwiperProducts basketDb={basketDb} />
      </div>
    </div>
  );
};

export default ProductsTab;
