import { IoCartOutline } from "react-icons/io5";
import { RiLoopLeftFill } from "react-icons/ri";
import { FaTruckFast, FaCheck } from "react-icons/fa6";

import "./OrderStatus.scss";

const OrderStatus = () => {
  return (
    <div className="order-status">
      <div className="order-total">
        <div className="icon-container">
          <IoCartOutline className="cart-icon" />
        </div>
        <div className="order-info">
          <h6 className="total-title">Total Order</h6>
          <p className="total-price-order">669</p>
        </div>
      </div>
      <div className="order-pending">
        <div className="icon-container-pending">
          <RiLoopLeftFill className="cart-icon-pending" />
        </div>
        <div className="pending-info">
          <h6 className="pending-title-number">
            <span className="title">Orders Pending</span>
            <span className="number">(143637.27)</span>
          </h6>
          <p className="total-price-order">669</p>
        </div>
      </div>
      <div className="order-processing">
        <div className="icon-container-processing">
          <FaTruckFast className="cart-icon-processing" />
        </div>
        <div className="order-info">
          <h6 className="total-title">Orders Processing</h6>
          <p className="total-price-order">669</p>
        </div>
      </div>
      <div className="order-delivered">
        <div className="icon-container-delivered">
          <FaCheck className="cart-icon-delivered" />
        </div>
        <div className="order-info">
          <h6 className="total-title">Orders Delivered</h6>
          <p className="total-price-order">669</p>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
