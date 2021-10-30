import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar1 display-sm">
        <div className="row justify-content-between align-items-center">
          <div className="leftSec">
            <span>Today's special offer</span>
          </div>

          <div className="middleSec">
            <div className="row justify-content-between align-items-center">
              <div className="input-group align-items-center display-md">
                <input type="text" value="" />
                <div className="text-group-btn text-white-50">
                  <button className="btn-danger p-2 border-0">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>

              <Link to="/cart">
                <button className="btn btn-dark p-1 text-white-50 display-sm">
                  <span>View Your Cart</span>
                  <i className="fas fa-shopping-cart"></i>
                </button>
              </Link>

              <div className="dropdown text-white-50 border-0 display-sm">
                <button className="profileBtn border-0">
                  <i className="fas fa-user"></i>{" "}
                  <span>
                    <i className="fas fa-angle-down    "></i>
                  </span>{" "}
                </button>
                <ul className="dropdown_menu">
                  <Link className="menu-item" to="/login">
                    Sign In
                  </Link>
                  <Link className="menu-item" to="/register">
                    Register User
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="p-2 bg-danger contact px-2">
            <Link to="/">Contact Us</Link>
          </div>
        </div>
      </div>

      <div className="navbar2 position-sticky">
        <div className="row justify-content-between w-100">
          <div className="logo">
            <img src="./assets/pexels-valeria-boltneva-1639562.jpg" alt="" />
          </div>

          <div className="row w-100 flex-wrap justify-content-between align-items-center">
            <div className="menu-lg sm-block">
              <div className="row align-items-center ">
                <NavLink
                  className="menu-item-link"
                  activeClassName="active"
                  exact
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className="menu-item-link"
                  activeClassName="active"
                  exact
                  to="/about"
                >
                  About Us
                </NavLink>
                <NavLink
                  className="menu-item-link"
                  activeClassName="active"
                  exact
                  to="/deals"
                >
                  Best Deals
                </NavLink>
                <NavLink
                  className="menu-item-link"
                  activeClassName="active"
                  exact
                  to="/services"
                >
                  Services
                </NavLink>
              </div>
            </div>

            <div className="displayMobile">
              <Link to="/cart">
                <button className="btn p-1">
                  <span>View Your Cart</span>
                  <i className="fas fa-shopping-cart"></i>
                </button>
              </Link>

              <div className="dropdown border-0">
                <button className="profileBtn border-0">
                  <i className="fas fa-user"></i>{" "}
                  <span>
                    <i className="fas fa-angle-down    "></i>
                  </span>{" "}
                </button>
                <ul className="dropdown_menu">
                  <Link className="menu-item" to="/login">
                    Sign In
                  </Link>
                  <Link className="menu-item" to="/register">
                    Register User
                  </Link>
                </ul>
              </div>
            </div>

            <div className="contactBy align-items-center">
              <div className="phone">
                <i className="fas fa-phone"></i>
                <span>(+91) 1648894658</span>{" "}
              </div>
              <div className="mail">
                <i className="far fa-envelope"></i>
                <span>help@example.com</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
