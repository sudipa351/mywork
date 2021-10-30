import React from "react";
import "./style.css";

const Dailyesc = () => {
  const products = [
    {
      Image: "./assets/Products/61nctAojOEL._SY450_.jpg",
      Name: "Colgate",
      DealDesc: "Up to 50% Off",
    },
    {
      Image:
        "./assets/Products/250-purifying-neem-face-wash-neem-scrub-himalaya-original-imafmfm8j8hsgxgh.jpeg",
      Name: "Himalya Face and Hand wash",
      DealDesc: "Up to 80% Off",
    },
    {
      Image: "./assets/Products/41MvyzmSSUL.jpg",
      Name: "Colgate Mouth fresh",
      DealDesc: "Min. 20% Off",
    },
    {
      Image:
        "./assets/Products/plax-pack-of-2-colgate-original-imag2thwgz67rcxz.jpeg",
      Name: "Lifebuoy Hand Sanitizer",
      DealDesc: "20-65% Off",
    },
    {
      Image: "./assets/Products/61HhZ5zvNsS._SL1500_.jpg",
      Name: "Nivea",
      DealDesc: "Up to 80% Off",
    },
    {
      Image: "./assets/Products/drugstore-body-washes_2.jpg",
      Name: "Shampoo Combo",
      DealDesc: "Min. 20% Off",
    },
  ];

  const DailyProducts = () => {
    return (
      <div className="skinhair">
        <h2 className="dealTitle">Daily essentials</h2>

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
    <div className="dailyEsc">
      <DailyProducts />
    </div>
  );
};

export default Dailyesc;
