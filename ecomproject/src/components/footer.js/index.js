import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="newslater">
        <form>
          <h3>Sign Up For Our Newsletter</h3>
          <div className="input-group">
            <input
              className="emailbox"
              type="email"
              placeholder="Enter Your email id"
            />
            <button type="button" className="input-group-txt" name="button">
              Subscribe Now
            </button>
          </div>
        </form>
      </div>

      <div className="footerCat">
        <div className="footCol">
          <div className="FootTitle">
            <h4> INFORMATION</h4>
          </div>
          <ul>
            <li>Events</li>
            <li>About Us</li>
            <li>Best Deals</li>
            <li>Services</li>
            <li>Short Codes</li>
            <li>Terms Of Use</li>
          </ul>
        </div>

        <div className="footCol">
          <div className="footTitle">
            <h4>POLICY INFO</h4>
          </div>
          <ul>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
          </ul>
        </div>

        <div className="footCol">
          <div className="col-2">
            <h4>WHAT IN STORIES</h4>
          </div>
          <ul>
            <li>Perfect</li>
            <li>Procces Snacks</li>
            <li>Kitchen</li>
            <li>Standard Taste</li>
            <li>Standard Taste</li>
          </ul>
        </div>

        <div className="footCol">
          <div className="footTitle">
            <h4>TWITTER POSTS</h4>
          </div>
          <ul>
            <li>Perfect</li>
            <li>Procces Snacks</li>
            <li>Kitchen</li>
            <li>Standard Taste</li>
            <li>Standard Taste</li>
          </ul>
        </div>

        <div className="socialSec">
          <div className="footTitle">
            <h4>Connect With Us</h4>
          </div>
          <div>
            <span>
              <i className="fab fa-facebook-f"></i>
            </span>
            <span>
              <i className="fab fa-twitter"></i>
            </span>
            <span>
              <i className="fab fa-google-plus"></i>
            </span>
            <span>
              <i className="fab fa-youtube"></i>
            </span>
            <span>
              <i className="fab fa-instagram"></i>
            </span>
          </div>
        </div>
        <p className="copyright">
          &copy; copyright 2021 Grocery Store. All rights reserved | Design by{" "}
          <span>Product</span>
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
