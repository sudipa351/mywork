import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Usersignup = () => {
  return (
    <div className="userSignUp">
      <div className="container">
        <div className="contentSec"></div>

        <div className="signUpSec">
          <h2>Register User</h2>

          <form action="">
            <div className="input-section">
              <input type="text" id="txtName" name="Name" required />
              <label htmlFor="txtName" className="lbl">
                Your Name
              </label>
            </div>

            <div className="input-section">
              <input type="email" id="txtEmail" name="email" required />
              <label htmlFor="txtEmail" className="lbl">
                Your Email
              </label>
            </div>

            <div className="input-section">
              <input type="password" id="txtPass" required name="password" />
              <label htmlFor="txtPass" className="lbl">
                Set Password
              </label>
            </div>

            <div className="input-section">
              <input type="tel" id="txtPhone" name="phone" required />
              <label htmlFor="txtPhone" className="lbl">
                Your Mobile Number
              </label>
            </div>

            <div className="input-section">
              Gender
              <div className="input-flex">
                <input type="radio" id="optMale" name="gender" value="male" />
                <label htmlFor="optMale">Male</label>
                <input
                  type="radio"
                  id="optFemale"
                  name="gender"
                  value="female"
                />
                <label htmlFor="optFemale">Female</label>
              </div>
            </div>

            <div className="addressSec">
              <div className="input-section">
                <input type="text" id="txtAdd1" name="address1" required />
                <label htmlFor="txtAdd1" className="lbl">
                  Address 1
                </label>
              </div>
              <div className="input-section">
                <input type="text" id="txtAdd2" name="address2" required />
                <label htmlFor="txtAdd2" className="lbl">
                  Address 2
                </label>
              </div>
              <div className="input-section">
                <input type="text" required id="txtCity" name="city" />
                <label htmlFor="txtCity" className="lbl">
                  City
                </label>
              </div>
              <div className="input-section">
                <input type="text" id="txtState" required name="state" />
                <label htmlFor="txtState" className="lbl">
                  State
                </label>
              </div>
              <div className="input-section">
                <input type="text" id="txtPincode" required name="pincode" />
                <label htmlFor="txtPincode" className="lbl">
                  Pincode
                </label>
              </div>
            </div>

            <div className="rememberMe">
              <input type="checkbox" name="remember" id="rem" />
              <label htmlFor="rem">
                Accept all{" "}
                <Link to="/termsofserv" className="normalLink">
                  {" "}
                  Terms of Service
                </Link>{" "}
                |{" "}
                <Link to="/privacy" className="normalLink">
                  Privacy Policy
                </Link>{" "}
                ?
              </label>
            </div>

            <button type="submit" className="signUpBtn">
              Submit
            </button>

            <Link to="/login" className="signIn" target="_blank">
              Already have an account?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Usersignup;
