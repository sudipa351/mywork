import React from "react";
import "./menu/style.css";

const Offers = () => {
  return (
    <section className="offers">
      <div className="d-flex flex-wrap justify-content-around">
        <div className="card">
          <div className="card-head">
            <img src="../assets/Products/best-shampoo.png" alt="" />
          </div>
          <div className="card-body">
            <h4>Shampoo</h4>
            <p>
              <strong>$76.99</strong>&nbsp; <strike>$56.87</strike>
            </p>
            <button>ADD TO CART</button>
          </div>
        </div>
        <div className="card">
          <div className="card-head">
            <img
              src="../assets/Products/0010279_india-gate-basmati-rice-regular-choice-5kg-packet_510.jpeg"
              alt=""
            />
          </div>
          <div className="card-body">
            <h4>India Gate Basmati Rice</h4>
            <p>
              <strong>$756.99</strong>&nbsp; <strike>$896.87</strike>
            </p>
            <button>ADD TO CART</button>
          </div>
        </div>
        <div className="card">
          <div className="card-head">
            <img
              src="../assets/Products/251047-2_7-pepsi-soft-drink.jpg"
              alt=""
            />
          </div>
          <div className="card-body">
            <h4>Pepsi - soft drink</h4>
            <p>
              <strong>$126.99</strong>&nbsp; <strike>$136.87</strike>
            </p>
            <button>ADD TO CART</button>
          </div>
        </div>
        <div className="card">
          <div className="card-head">
            <img
              src="../assets/Products/14c3c5c519398e5c7f897d4ef082a8e1.jpg"
              alt=""
            />
          </div>
          <div className="card-body">
            <h4>Kitchen</h4>
            <p>
              <strong>$376.99</strong>&nbsp; <strike>$496.87</strike>
            </p>
            <button>ADD TO CART</button>
          </div>
        </div>
        <div className="card">
          <div className="card-head">
            <img src="../assets/Products/61L4nrFQ0mL._SL1000_.jpg" alt="" />
          </div>
          <div className="card-body">
            <h4>Dog Food</h4>
            <p>
              <strong>$176.99</strong>&nbsp; <strike>$187.87</strike>
            </p>
            <button>ADD TO CART</button>
          </div>
        </div>
        <div className="card">
          <div className="card-head">
            <img src="../assets/Products/91D6fA3siUL._SX569_.jpg" alt="" />
          </div>
          <div className="card-body">
            <h4>Face Wash</h4>
            <p>
              <strong>$196.99</strong>&nbsp; <strike>$216.87</strike>
            </p>
            <button>ADD TO CART</button>
          </div>
        </div>
        <div className="card">
          <div className="card-head">
            <img src="../assets/Products/81Xsw5nlSNL._SL1500_.jpg" alt="" />
          </div>
          <div className="card-body">
            <h4>Shampoo conditionar</h4>
            <p>
              <strong>$376.99</strong>&nbsp; <strike>$486.87</strike>
            </p>
            <button>ADD TO CART</button>
          </div>
        </div>
        <div className="card">
          <div className="card-head">
            <img src="../assets/Products/s-l640.jpg" alt="" />
          </div>
          <div className="card-body">
            <h4>Nivea</h4>
            <p>
              <strong>$316.99</strong>&nbsp; <strike>$356.87</strike>
            </p>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
