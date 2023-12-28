import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineLocalPhone, MdOutlineEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
  FaGooglePlusG,
} from "react-icons/fa";
import { FaRss } from "react-icons/fa6";

import "../Footer/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-top-container">
            <div className="logo-copyright">
              <div className="logo">
                <img src="/src/assets/images/logo.png" alt="logo" />
              </div>
              <div className="copyright">
                <p>
                  Copyright © 2023
                  <Link className="link" to="/">
                    dilan
                  </Link>
                  . <br /> all rights reserved
                </p>
              </div>
            </div>
            <div className="information">
              <h4 className="title">information</h4>
              <div className="content">
                <ul className="content-list">
                  <li>Specials</li>
                  <li>New products</li>
                  <li>Top sellers</li>
                  <li>Our stores</li>
                  <li>Contact us</li>
                </ul>
              </div>
            </div>
            <div className="information">
              <h4 className="title">my account</h4>
              <div className="content">
                <ul className="content-list">
                  <li>My orders</li>
                  <li>My credit slips</li>
                  <li>My addresses</li>
                  <li>My personal info</li>
                  <li>My wishlist</li>
                </ul>
              </div>
            </div>
            <div className="information">
              <h4 className="title">quick links</h4>
              <div className="content">
                <ul className="content-list">
                  <li>New User</li>
                  <li>Help Center</li>
                  <li>Refund Policy</li>
                  <li>Report Spam</li>
                  <li>FAQs</li>
                </ul>
              </div>
            </div>
            <div className="contact-info">
              <h4 className="title">contact us</h4>
              <div className="adress-content">
                <div className="single-adress">
                  <IoHomeOutline className="icon" />
                  <span>Your store address goes here</span>
                </div>
                <div className="single-adress">
                  <MdOutlineLocalPhone className="icon" />
                  <span>+012 333 456789</span>
                </div>
                <div className="single-adress">
                  <MdOutlineEmail className="icon" />
                  <span>info@example.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-container">
            <div className="social">
              <ul>
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaGooglePlusG />
                </li>
                <li>
                  <FaPinterestP />
                </li>
                <li>
                  <FaRss />
                </li>
              </ul>
            </div>
            <div className="payment-img">
              <img src="src/assets/images/payment-img_298x.png" alt="payment" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
