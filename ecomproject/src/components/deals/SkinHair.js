import React from "react";
import "./style.css";

const Skinhair = () => {
  const products = [
    {
      Image: "./assets/Products/41FgYpc48CL.jpg",
      Name: "Biotique",
      DealDesc: "Up to 50% Off",
    },
    {
      Image:
        "./assets/Products/depositphotos_164077822-stock-photo-variety-of-nivea-products-including.jpg",
      Name: "Nivea Cream",
      DealDesc: "Up to 80% Off",
    },
    {
      Image: "./assets/Products/LKESPF509.jpg",
      Name: "Lakme Sun Expert",
      DealDesc: "Min. 20% Off",
    },
    {
      Image: "./assets/Products/81Xsw5nlSNL._SL1500_.jpg",
      Name: "WOW Shampoo",
      DealDesc: "20-65% Off",
    },
    {
      Image: "./assets/Products/skincare-products-online-500x500.jpg",
      Name: "Patanjali Facewash and Cream",
      DealDesc: "Up to 80% Off",
    },
    {
      Image:
        "./assets/Products/l-oreal-paris-total-repair-5-advanced-repairing-shampoo-640-ml-with-extra-10-5-20210412.jpg",
      Name: "Loareal",
      DealDesc: "Min. 20% Off",
    },
  ];

  const SkinHair = () => {
    return (
      <div className="skinhair">
        <h2 className="dealTitle">skin &amp; hair care</h2>

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
    <div className="skinHairSec">
      <SkinHair />
    </div>
  );
};

export default Skinhair;
