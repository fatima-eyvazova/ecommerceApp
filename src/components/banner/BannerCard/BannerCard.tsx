import "../BannerCard/BannerCard.scss";
const BannerCard = () => {
  return (
    <div className="banner-card">
      <div className="container">
        <img
          src="src/assets/images/2_8ea21db6-8ebf-4add-adf2-47f288f61dad.webp"
          alt="banner image"
        />
        <div className="banner-content">
          <h4>
            Jumpers & <br />
            Cardigans
          </h4>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
