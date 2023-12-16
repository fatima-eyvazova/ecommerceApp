import { FaSync, FaCreditCard } from "react-icons/fa";
import { IoIosHelpBuoy } from "react-icons/io";

import "../Services/Services.scss";

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="items">
          <div className="item">
            <FaSync className="icon" />
            <h4>return & exchange</h4>
            <p>Committed to return the money in 30 days</p>
          </div>
          <div className="item">
            <FaCreditCard className="icon" />
            <h4>receive gift card</h4>
            <p>Receive gift all over order $50</p>
          </div>
          <div className="item">
            <IoIosHelpBuoy className="icon" />
            <h4>online support 24/7</h4>
            <p>24/7 online support is always ready</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
