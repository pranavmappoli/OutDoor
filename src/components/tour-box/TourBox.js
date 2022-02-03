import React from "react";
import nat4 from "../../assets/img/nat-4.jpg";
import "./tourBox.css";

function TourBox(props) {
  const listItems = props.tour__list.map((elem, i) => {
    return (
      <li className="tour__list-item" key={i}>
        {elem}
      </li>
    );
  });

  const colorListCss = {
    blue: `linear-gradient(to right,rgb(80, 105, 189),rgb(33, 67, 180))`,
    green: `linear-gradient(to right,rgba(126, 213, 111),rgba(40, 180, 133))`,
    red: `linear-gradient(to right, rgb(214, 93, 103),rgb(245, 50, 66))`,
  };

  return (
    <div className="tour__container">
      <div
        className="tour__img "
        style={{
          backgroundImage: `${colorListCss[props.tour__color]},url(${
            props.tour__img
          })`,
        }}
      ></div>
      <div className="tour__content ">
        <span className="tour__heading">{props.tour__heading} </span>
        <ul className="tour__list">{listItems}</ul>
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
