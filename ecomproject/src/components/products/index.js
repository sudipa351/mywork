import React from "react";
import "./style.css";

const Topproducts = () => {
  const list = [
    "All Brands",
    "Vegerables",
    "Fruits",
    "Juices",
    "Pet Food",
    "Bread & Bakery",
    "Cleaning",
    "Dry Fruits",
    "Dary Products",
  ];

  const List = () => {
    return (
      <>
        <ul>
          {list.map((listItem, index) => {
            return (
              <li className="topItemList" key={index}>
                <span className="greenCheck">
                  <i className="fas fa-check"></i>
                </span>{" "}
                {listItem}
              </li>
            );
          })}
        </ul>
      </>
    );
  };

  let images = [
    "./assets/Products/2020_03_24_90456_1585030352._large.jpg",
    "./assets/Products/variety-of-spices-in-dishes-xlarge.jpg",
    "./assets/Products/rtx1mwxa.jpg",
    "./assets/Products/14c3c5c519398e5c7f897d4ef082a8e1.jpg",
    "./assets/Products/groceries-e.jpg",
  ];

  const ImageDeck = () => {
    return (
      <>
        {images.map((image, index) => {
          return (
            <div className="imgBox" key={index}>
              <img src={image} alt="" />
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="topProducts">
      <div className="d-grid topProductDeck">
        <div className="list">
          <List />
        </div>
        <div className="image-grid">
          <ImageDeck />
        </div>
        <div className="topProductDesc">
          <p>
            Get <span style={{ color: "red" }}>25% Off</span> On First Order And
            Also Gift Vouchar
          </p>
        </div>
      </div>
    </div>
  );
};

export default Topproducts;
