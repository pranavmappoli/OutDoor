import React from "react";
import "./footer.css";
import footerLogoL1x from "../../assets/img/logo-green-1x.png";
import footerLogoL2x from "../../assets/img/logo-green-2x.png";
import footerLogoS1x from "../../assets/img/logo-green-small-1x.png";
import footerLogoS2x from "../../assets/img/logo-green-small-2x.png";

function Footer() {
  return (
    <div className="  footer__container " id="footer">
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
        <picture className="footer__logo">
          <source
            srcSet={`${footerLogoL1x} 1x,${footerLogoL2x} 2x`}
            alt="footerlogo"
            media="(min-width:600px)"
          />

          <img srcSet={`${footerLogoS1x} 1x,${footerLogoS2x}`} />
        </picture>
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
