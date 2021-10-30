import React from "react";
import "./style.css";
import Dailyesc from "./DailyEsc";
import Mens from "./Mens";
import Skinhair from "./SkinHair";

const Bestdeal = () => {
  const topProductList = [
    {
      Image:
        "./assets/Products/Garnier Skin Natural Light Complete UV Face Cream 23 gmA.jpg",
      Name: "Garnier Skin Natural Light Complete UV Face Cream",
      DealDesc: "20-50% Off",
    },
    {
      Image:
        "./assets/Products/l-oreal-paris-total-repair-5-advanced-repairing-shampoo-640-ml-with-extra-10-5-20210412.jpg",
      Name: "Loreal Paris",
      DealDesc: "40-50% Off",
    },
    {
      Image: "./assets/Products/Everything-you-need-SP_2x.png",
      Name: "Gilletto",
      DealDesc: "Min 30% Off",
    },
    {
      Image:
        "./assets/Products/depositphotos_164077822-stock-photo-variety-of-nivea-products-including.jpg",
      Name: "Nivea Men",
      DealDesc: "20-50% Off",
    },
    {
      Image: "./assets/Products/Dettol-Competitors.jpg",
      Name: "Dettol",
      DealDesc: "40-50% Off",
    },
    {
      Image: "./assets/Products/247115-6_1-dove-hair-fall-rescue-shampoo.jpg",
      Name: "Dove Shampoo",
      DealDesc: "Min 30% Off",
    },
  ];

  const spotlightproductList = [
    {
      Image:
        "./assets/Products/garnier-light-complete-vitamin-c-booster-days-to-spot-less.jpg",
      Name: "Garniar Vitamin C",
      Discount: "Up to 50% off",
      DealPrice: 512,
      RealPrice: 753,
    },
    {
      Image: "./assets/Products/667839b42241782.png",
      Name: "Nivea soft cream",
      Discount: "Up to 50% off",
      DealPrice: 512,
      RealPrice: 753,
    },
    {
      Image: "./assets/Products/s-l640.jpg",
      Name: "Nivea - sun protect",
      Discount: "Up to 50% off",
      DealPrice: 512,
      RealPrice: 753,
    },
    {
      Image:
        "./assets/Products/l-oreal-paris-total-repair-5-advanced-repairing-shampoo-640-ml-with-extra-10-5-20210412.jpg",
      Name: "Loreal",
      Discount: "Up to 50% off",
      DealPrice: 512,
      RealPrice: 753,
    },
    {
      Image: "./assets/Products/drugstore-body-washes_2.jpg",
      Name: "Shampoo Combo",
      Discount: "Up to 50% off",
      DealPrice: 512,
      RealPrice: 753,
    },
    {
      Image: "./assets/Products/dove-set-1.jpg",
      Name: "Dove Soap",
      Discount: "Up to 50% off",
      DealPrice: 512,
      RealPrice: 753,
    },
  ];

  const spotlightproductList2 = [
    {
      Image:
        "./assets/Products/dove_igshoot_intensive_repair_shampoo_and_conditioner.jpg",
      Name: "Dove Soap",
      DealDesc: "20-50% Off",
    },
    {
      Image: "./assets/Products/Dettol-Competitors.jpg",
      Name: "Dettol, Soap + Handwash",
      DealDesc: "40-50% Off",
    },
    {
      Image: "./assets/Products/51jom-fpbuL._SX355_.jpg",
      Name: "Garnier Men",
      DealDesc: "Min 30% Off",
    },
  ];

  const TopBrands = () => {
    return (
      <div className="topBrand">
        <h2 className="dealTitle">Top brands</h2>

        <div className="imageContainerScroll">
          <div className="imageDeck">
            {topProductList.map((product, index) => {
              return (
                <div className="card" key={index}>
                  <div className="card-head">
                    <img src={product.Image} alt="" />
                  </div>
                  <div className="card-body">
                    <p className="PName">{product.Name}</p>
                    <h4 className="PDealDesc">{product.DealDesc}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const SpotlightProduct = () => {
    return (
      <div className="spotlight">
        <h2 className="dealTitle">in the spotlight</h2>

        <div className="searchBar">
          <input type="text" name="searchItem" id="txtSearch" />
          <button type="submit" className="viewAllBtn">
            View All <i className="fas fa-chevron-right arrow"></i>
          </button>
        </div>

        <div className="imageContainerScroll">
          <div className="imageDeckScroll">
            {spotlightproductList.map((product, index) => {
              return (
                <div className="PaperCard" key={index}>
                  <div className="PaperCard-head">
                    <img src={product.Image} alt="" />
                  </div>
                  <div className="PaperCard-body">
                    <p className="PName">{product.Name}</p>
                    <p className="PDiscount">{product.Discount}</p>
                    <p className="PDealPrice">
                      &#8377;{product.DealPrice}{" "}
                      <span className="PPrice">{product.RealPrice}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="ImageContainer">
          <div className="imageDeck">
            {spotlightproductList2.map((product, index) => {
              return (
                <div className="card" key={index}>
                  <div className="card-head">
                    <img src={product.Image} alt="" />
                  </div>
                  <div className="card-body">
                    <p className="PName">{product.Name}</p>
                    <h4 className="PDealDesc">{product.DealDesc}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="bestDeal">
      <div className="container">
        <div className="banner">
          <img src="./assets/Products/ACV mist toner banner.jpg" alt="" />
        </div>
        <TopBrands />
        <SpotlightProduct />
        <Skinhair />
        <div className="banner">
          <img src="./assets//Products/Hair web banner.jpg" alt="" />
        </div>
        <Mens />
        <Dailyesc />

        <div className="banner">
          <img src="./assets/Products/Personal-care-brand-Joy_2.jpg" alt="" />
        </div>

        <div className="discounts">
          <h2 className="dealTitle">Special Discounts</h2>
          <div className="descContainer">
            <div className="paper">
              <span>min</span>
              <h1>
                30
                <small>
                  %<br /> off
                </small>
              </h1>
            </div>
            <div className="paper">
              <span>min</span>
              <h1>
                40
                <small>
                  %<br /> off
                </small>
              </h1>
            </div>
            <div className="paper">
              <span>min</span>
              <h1>
                50
                <small>
                  %<br /> off
                </small>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestdeal;
