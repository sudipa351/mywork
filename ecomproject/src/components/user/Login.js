import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Userlogin = () => {
  return (
    <div className="userLogin">
      <div className="container">
        <div className="contentSec">
          <h1>Welcome Back</h1>
          <p>
            It is a long estabilished fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using
          </p>

          <div className="socialSec">
            <a className="socialIcon fb" href="https://www.facebook.com/">
              <i className="fab fa-facebook"></i>
            </a>
            <a className="socialIcon twt" href="https://www.facebook.com/">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="socialIcon insta" href="https://www.facebook.com/">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="socialIcon yt" href="https://www.facebook.com/">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="loginSec">
          <h2>Sign in</h2>

          <form action="">
            <div className="input-section">
              <label htmlFor="txtEmail">Email Address</label>
              <input type="email" id="txtEmail" name="email" />
            </div>

            <div className="input-section">
              <label htmlFor="txtPass">Password</label>
              <input type="password" id="txtPass" name="password" />
            </div>

            <div className="rememberMe">
              <input type="checkbox" name="remember" id="rem" />
              <label htmlFor="rem">Remember Me</label>
            </div>

            <button type="submit" className="signinBtn">
              Sign in now
            </button>

            <Link to="/resetPassword" className="lostPass" target="_blank">
              Lost your password?
            </Link>
          </form>

          <div className="tac">
            <p>
              By clicking on "Sign in now" you agree to{" "}
              <Link to="/termsofserv" className="normalLink">
                {" "}
                Terms of Service
              </Link>{" "}
              |{" "}
              <Link to="/privacy" className="normalLink">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userlogin;
