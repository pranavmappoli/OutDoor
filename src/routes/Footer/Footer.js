import React from "react";
import "./footer.css";
import footerLogo from "../../assets/img/favicon.png";

function Footer() {
  return (
    <div className="  footer__container">
      <div className="footer__grid">
        <div className="footer__menu">
          <div className="footer__menu--container">
            <ul className="footer__menu--list">
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Company</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Privacy policy</a>
              </li>
              <li>
                <a href="">Terms</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__logo">
          <img src={footerLogo} alt="footerlogo" />
        </div>
        <div className="footer__description">
          <span>
            Built by Pranav mappoli as part of online course taken by Jonas
            Schedtmann on advanced CSS. Pranav has recreated entirely in React
            JS
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
