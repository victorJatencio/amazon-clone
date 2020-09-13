import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer__backToTop">
        <a href="#home">Back to top</a>
      </div>
      <div className="footer__quickLinks">
        <div className="footer_col">
          <h4>Get to Know Us</h4>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Press Center</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Tours</li>
          </ul>
        </div>
        <div className="footer_col">
          <h4>Make Money with Us</h4>
          <ul>
            <li>Sell on Amazon</li>
            <li>Sell Under Amazon Accelerator</li>
            <li>Sell on Amazon Handmade</li>
            <li>Sell on Amazon Business</li>
            <li>Sell Your Apps on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
          </ul>
        </div>
        <div className="footer_col">
          <h4>Amazon Payment Products</h4>
          <ul>
            <li>Amazon Rewards Visa Signature Cards</li>
            <li>Amazon.com Store Card</li>
            <li>Amazon Business Card</li>
            <li>Amazon Business Line of Credit</li>
            <li>Shop with Points</li>
            <li>Credit Card Marketplace</li>
            <li>Reload Your Balance</li>
          </ul>
        </div>
        <div className="footer_col">
          <h4>Let Us Help You</h4>
          <ul>
            <li>Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & Policies</li>
            <li>Amazon Prime</li>
            <li>Returns & Replacements</li>
            <li>Manage Your Content and Devices</li>
          </ul>
        </div>
      </div>
      <div className="footer__logo">
        <a href="#home">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
