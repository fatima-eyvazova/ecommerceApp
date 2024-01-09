import "./ProductsItem.scss";
const ProductsItem = () => {
  return (
    <div className="product-item-page">
      <div className="container-product-item">
        <div className="product-image">
          <img
            src="https://i.postimg.cc/bvrsZtMt/Calabaza-Squash-Package-each.jpg"
            alt="Product"
          />
        </div>
        <div className="product-info">
          <h2 className="product-title">Product Title</h2>
          <p className="product-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="price-brand">
            <p className="product-price">€199.99</p>
            <p className="stock">In Stock</p>
            <p className="quantity">
              <span className="text">QUANTITY: </span>
              <span className="num"> 2238</span>
            </p>
            <p className="product-brand">
              <span className="brand">Brand :</span>
              <span className="brand-name"> Iphone</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsItem;
