import React from "react";
import "./style.css";

const Mens = () => {
  const products = [
    {
      Image: "./assets/Products/8901526209637_t1.jpg",
      Name: "Garnier",
      DealDesc: "Up to 50% Off",
    },
    {
      Image: "./assets/Products/513nelamoHL._SL1100_.jpg",
      Name: "Beard Growth Oil",
      DealDesc: "Up to 80% Off",
    },
    {
      Image: "./assets/Products/sp_classic_shave_foam_menthol_402x.png",
      Name: "Gillette",
      DealDesc: "Min. 20% Off",
    },
    {
      Image: "./assets/Products/51qwWvYogkL._SY355_.jpg",
      Name: "Hair Wax",
      DealDesc: "20-65% Off",
    },
    {
      Image: "./assets/Products/Everything-you-need-SP_2x.png",
      Name: "Gillette Combo",
      DealDesc: "Up to 80% Off",
    },
    {
      Image:
        "./assets/Products/garnier-light-complete-vitamin-c-booster-days-to-spot-less.jpg",
      Name: "Garnier Vittamin C",
      DealDesc: "Min. 20% Off",
    },
  ];
  const MensGrooming = () => {
    return (
      <div className="skinhair">
        <h2 className="dealTitle">Men's grooming</h2>

        <div className="imageContainerScroll">
          <div className="imageDeck">
            {products.map((product, index) => {
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
    <div className="mensGroming">
      <MensGrooming />
    </div>
  );
};

export default Mens;
