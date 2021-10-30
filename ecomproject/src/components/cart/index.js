import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Cart = () => {
  const itemList = [
    {
      Image:
        "./assets/Products/250-purifying-neem-face-wash-neem-scrub-himalaya-original-imafmfm8j8hsgxgh.jpeg",
      Name: "Himalya Face Wash",
      Qty: 2,
      Price: 168,
    },
    {
      Image: "./assets/Products/dove-set-1.jpg",
      Name: "Dove Shope",
      Qty: 1,
      Price: 327,
    },
    {
      Image: "./assets/Products/LKESPF509.jpg",
      Name: "Cream",
      Qty: 1,
      Price: 257,
    },
  ];

  const PrductsDetail = () => {
    return (
      <>
        <h3>Total cart item(s) {itemList.length}</h3>
        {itemList.map((item, index) => {
          return (
            <div className="productCard" key={index}>
              <div className="pDetail">
                <div className="image">
                  <img src={item.Image} alt="" />
                </div>
                <div className="content">
                  <p className="PName">{item.Name}</p>
                  <p className="PName">
                    Price: <span>&#8377;{item.Price}</span>
                  </p>
                  <button className="delItemBtn">Remove</button>
                </div>
              </div>
              <div className="pQty">
                <p>{item.Qty}</p>
              </div>
              <div className="pPrice">
                <h4>&#8377;{item.Price * item.Qty}</h4>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div className="cart">
      <div className="banner">
        <h1>Your Cart</h1>
      </div>

      <div className="cartDeck">
        <div className="cardBlock">
          <PrductsDetail />
        </div>
        <div className="completeCart">
          <h3>Ready for Checkout</h3>
          <br />
          <hr />
          <dl>
            <dt>Subtotal</dt>
            <dd>&#8377;920.00</dd>
            <dt>Tax</dt>
            <dd>&#8377;35.00</dd>
            <dt>Total</dt>
            <dd>&#8377;975.00</dd>
          </dl>

          <Link className="goCheckoutBtn" to="/cart/checkout">
            Proceed to checkout{" "}
            <span>
              <i className="fas fa-arrow-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
