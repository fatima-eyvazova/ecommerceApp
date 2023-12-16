import { FaRegEye, FaRegStar } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";

import "../DiscountProduct/DiscountProduct.scss";

const DiscountProduct = () => {
  return (
    <div className="deal-product">
      <div className="item">
        <div className="deal-img-container">
          <div className="deal-action">
            <span className="icon">
              <FaRegEye />
            </span>
            <span className="icon">
              <HiOutlineShoppingBag />
            </span>
          </div>
          <div className="deal-img">
            <img src="src/assets/images/deal-img.webp" alt="deal" />
          </div>
        </div>
        <div className="deal-product-content">
          <h4>Leyendo Distintos</h4>
          <div className="stars">
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </div>
          <p>
            En el valle, la vivienda en la vigilancia específica, el reemplazo o
            la consolidación de la cama, un hombre obsesionado con la reducción
            de opciones de apuestas ilegales. Wow, mercado muy atractivo, de mis
            visitantes. Tiempo de desarrollo reciente para odiar, un bar beef
            tiempo.
          </p>
          <div className="product-price">
            <span className="money-new" data-currency-usd="$310.00">
              $310.00
            </span>
            <span className="money-old" data-currency-usd="$500.00">
              $500.00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountProduct;
