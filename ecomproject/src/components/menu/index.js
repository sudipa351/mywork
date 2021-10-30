import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
      >
        <div>
          <img src="./assets/Products/spicy-food.jpg" alt="" />
        </div>
        <div>
          <img src="./assets/Banners/shoe banner.jpeg" alt="" />
        </div>
        <div>
          <img src="./assets/Products/ACV mist toner banner.jpg" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

const Menu = () => {
  return (
    <div className="menuGrid">
      <div className="menuDeck">
        <ul className="menu">
          <li className="menuItem">
            <NavLink className="itemLink" exact to="/branditem">
              Branded Items
            </NavLink>{" "}
          </li>
          <li className="menuItem">
            <NavLink className="itemLink" exact to="/household">
              Households
            </NavLink>{" "}
          </li>
          <li className="menuItem">
            <NavLink className="itemLink" exact to="/veggiesfruits">
              Veggies &amp; Fruits &nbsp;{" "}
              <i className="fas fa-chevron-down"></i>
            </NavLink>
            <ul className="nestedList">
              <li className="menuItem">
                <NavLink
                  className="itemLink"
                  exact
                  to="/veggiesfruits#bluepurple"
                >
                  Blue and Purple
                </NavLink>
              </li>
              <li className="menuItem">
                <NavLink className="itemLink" exact to="/veggiesfruits#green">
                  Green
                </NavLink>
              </li>
              <li className="menuItem">
                <NavLink className="itemLink" exact to="/veggiesfruits#red">
                  Red
                </NavLink>
              </li>
              <li className="menuItem">
                <NavLink className="itemLink" exact to="/veggiesfruits#white">
                  White
                </NavLink>
              </li>
              <li className="menuItem">
                <NavLink className="itemLink" exact to="/veggiesfruits#yellow">
                  Yellow / Orange
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="menuItem">
            <NavLink className="itemLink" exact to="/kitchen">
              Kitchen
            </NavLink>
          </li>
          <li className="menuItem">
            <NavLink className="itemLink" exact to="/shortcoders">
              Short Coders
            </NavLink>
          </li>
          <li className="menuItem">
            <NavLink className="itemLink" exact to="/beverages">
              Beverages &nbsp; <i className="fas fa-chevron-down"></i>
            </NavLink>
            <ul className="nestedList">
              <li className="menuItem">
                <NavLink className="itemLink" exact to="/beverages#water">
                  Water
                </NavLink>
              </li>
              <li className="menuItem">
                <NavLink
                  className="itemLink"
                  exact
                  to="/beverages#chilledjuices"
                >
                  Chilled Juices
                </NavLink>
              </li>
              <li className="menuItem">
                <NavLink className="itemLink" exact to="/beverages#softdrink">
                  Soft Drink
                </NavLink>
              </li>
              <li className="menuItem">
                <NavLink className="itemLink" exact to="/beverages#sode">
                  Soda
                </NavLink>
              </li>
              <li className="menuItem">
                <NavLink className="itemLink" exact to="/beverages#coffee">
                  Coffee
                </NavLink>
              </li>
              <li className="menuItem">
                <NavLink className="itemLink" exact to="/beverages#tea">
                  Tea &amp; Infusion
                </NavLink>
              </li>
              <li className="menuItem">
                <NavLink className="itemLink" exact to="/beverages#chinesetea">
                  Chines Tea
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="menuItem">
            <NavLink className="itemLink" exact to="/petfood">
              Pet Food
            </NavLink>
          </li>
          <li className="menuItem">
            <NavLink className="itemLink" exact to="/frozenfoods">
              Frozen Foods &nbsp; <i className="fas fa-chevron-down"></i>
            </NavLink>
            <ul className="nestedList">
              <li className="menuItem">
                <NavLink className="itemLink" exact to="/frozenfood#meats">
                  Meats
                </NavLink>
              </li>
              <li className="menuItem">
                <NavLink className="itemLink" exact to="/frozenfood#dairy">
                  Dairy
                </NavLink>
              </li>
              <li className="menuItem">
                <NavLink className="itemLink" exact to="/frozenfood#bakedfoods">
                  Baked Foods
                </NavLink>
              </li>
              <li className="menuItem">
                <NavLink className="itemLink" exact to="/frozenfood#other">
                  Other
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="menuItem">
            <NavLink className="itemLink" exact to="/breadbakery">
              Bread &amp; Bakery
            </NavLink>
          </li>
        </ul>
      </div>
      <CarouselComponent />
    </div>
  );
};

export default Menu;
