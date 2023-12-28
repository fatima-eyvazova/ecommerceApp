import "../BannerCard/BannerCard.scss";
import { motion } from "framer-motion";

const BannerCard = () => {
  return (
    <div className="banner-card">
      <div className="container">
        <div className="banner-item">
          <img
            src="src/assets/images/2_8ea21db6-8ebf-4add-adf2-47f288f61dad.webp"
            alt="banner image"
          />
          <motion.div
            className="banner-content"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1.4, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h4>
              Jumpers & <br />
              Cardigans
            </h4>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
