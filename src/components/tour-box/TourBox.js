import React from "react";
import nat4 from "../../assets/img/nat-4.jpg";
import "./tourBox.css";
import MainButton from "../buttons/MainButton";

function TourBox(props) {
  const listItems = props.tour__list.map((elem, i) => {
    return (
      <li className="tour__list-item" key={i}>
        {elem}
      </li>
    );
  });

  const colorListCss = {
    blue: `linear-gradient(to right bottom,rgb(80, 105, 189),rgb(33, 67, 180))`,
    green: `linear-gradient(to right bottom,rgba(126, 213, 111),rgba(40, 180, 133))`,
    red: `linear-gradient(to right bottom, rgb(214, 93, 103),rgb(245, 50, 66))`,
  };

  return (
    <div className="tour__main--container">
      <div className="tour__container--front">
        <div
          className="tour__img "
          style={{
            backgroundImage: `${colorListCss[props.tour__color]},url(${
              props.tour__img
            })`,
          }}
        ></div>
        <div className="tour__content">
          <div className="tour__heading">
            <span
              className="tour__heading--span"
              style={{ backgroundImage: `${colorListCss[props.tour__color]}` }}
            >
              {props.tour__heading}
            </span>
          </div>
          <ul className="tour__list">{listItems}</ul>
        </div>
      </div>
      <div
        className="tour__container--back "
        style={{ backgroundImage: `${colorListCss[props.tour__color]}` }}
      >
        <div className="tour__content--back">
          <div className="tour__content--only">ONLY</div>
          <div className="tour__content--price">
            <span>$</span>
            {props.tour__price}
          </div>
          <div className="tour__content--button">
            <MainButton btn__name="book now" />
          </div>
        </div>
      </div>
    </div>
  );
}
TourBox.defaultProps = {
  tour__img: nat4,
  tour__color: "red",
  tour__heading: "the sea explorar",
  tour__list: [
    "3 day tour",
    "upto 30 peoples",
    "2 tour guides",
    "sleep in cozy hostel",
    "difficult:easy",
  ],
  tour__price: 320,
};
export default TourBox;
