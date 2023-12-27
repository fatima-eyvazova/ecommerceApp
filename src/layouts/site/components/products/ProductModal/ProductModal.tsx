import { FaRegHeart } from "react-icons/fa6";

import "./ProductModal.scss";

const ModalProduct = () => {
  return (
    <div className="modal-product">
      <div className="modal-container">
        <div className="modal-left">
          <img src="/src/assets/images/product-img.webp" alt="modal" />
        </div>
        <div className="modal-right">
          <div className="modal-content">
            <h3 className="product-title">Variable Product</h3>
            <div className="product-price">
              <span className="max-price">$500.00</span>
              <span className="discount-price">$400.00</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
              convallis nisl, at aliquam dolor. Morbi in iaculis nunc. Nulla eu
              mi at velit imperdiet sollicitudin sed vel risus. Quisque eleifend
              lorem ipsum, et tempus nulla convallis nec.&nbsp;Nos aseguraremos
              de que para publicar un comentario.&nbsp;Es un hecho establecido
              hace demasiado tiempo que un lector se distraerá con el contenido
              del texto de un sitio mientras que mira su diseño. El punto de
              usar Lorem Ipsum es que tiene una distribución...
            </p>
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
