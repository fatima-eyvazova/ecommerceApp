import "../Innovations/Innovations.scss";

const Innovations = () => {
  return (
    <div className="innovations-section">
      <div className="container">
        <div className="discount-wrapper">
          <h4 className="title">New Arrivals!</h4>
          <h2 className="info">
            Women Collection 30% Off <br />
            Autumn Fashion
          </h2>
          <p className="description">
            We sell not only top quality products, but give our customers a
            positive online shopping experience.
          </p>
          <div className="overview-btn">Shop now!</div>
        </div>
        <div className="discount-img">
          <img src="src/assets/images/banner-6.webp" alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Innovations;
