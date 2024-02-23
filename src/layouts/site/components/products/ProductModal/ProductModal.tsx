import { FaRegHeart } from "react-icons/fa6";

import "./ProductModal.scss";
import { GetProductItem } from "../../../../dashboard/pages/ProductsDashboard/types";

type Props = {
  product: GetProductItem;
};
const ModalProduct = ({ product }: Props) => {
  const { _id: id, title, productPrice, salePrice, images } = product;

  return (
    <div className="modal-product">
      <div className="modal-container">
        <div className="modal-left">
          {images && images.length > 0 && (
            <img
              className="deal-product-img"
              src={images[0].url}
              alt={"product"}
            />
          )}
        </div>
        <div className="modal-right">
          <div className="modal-content">
            <h3 className="product-title">{product?.title}</h3>
            <div className="product-price">
              <span className="max-price">{product?.productPrice} $</span>
              <span className="discount-price">{product?.salePrice} $</span>
            </div>
            <p>{product?.description}</p>
            <div className="basket-favorites">
              <div className="plus-minus">
                <input type="number" />
              </div>
              <button className="add-btn">Add to Cart</button>
              <div className="favorite-button">
                <FaRegHeart className="heart-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;
