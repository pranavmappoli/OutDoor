import React, { useState } from "react";
import "./navigation.css";
import { Link } from "react-scroll";

function Navigation() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="navigation__container">
      <input
        className="checkbox"
        type="checkbox"
        id="checkbox"
        checked={checked}
        onChange={(e) => {}}
      />
      <label
        className="nav__btn"
        htmlFor="checkbox"
        onClick={() => setChecked((c) => !c)}
      >
        <div className="nav__btn--style">
          <div className="nav__btn--style1"></div>
          <div className="nav__btn--style2"></div>
          <div className="nav__btn--style3"></div>
        </div>
      </label>
      <div className="radio__background"></div>
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link
              to="home"
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setChecked((c) => !c)}
            >
              <span>01</span> Home
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="about"
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setChecked((c) => !c)}
            >
              <span>02</span> About OutDoors
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="features"
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setChecked((c) => !c)}
            >
              <span>03</span> Your benifits
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="tours"
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setChecked((c) => !c)}
            >
              <span>04</span> popular tours
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="stories"
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setChecked((c) => !c)}
            >
              <span>05</span> stories
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="booking"
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setChecked((c) => !c)}
            >
              <span>06</span> Book Now
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
