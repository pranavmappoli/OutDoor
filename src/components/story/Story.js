import React from "react";
import "./story.css";
import defaultImg from "../../assets/img/nat-8.jpg";

function Story(props) {
  return (
    <div className="story__container--main">
      <div className="story__figure--container">
        <div className="story__figure">
          <div className="story__author">{props.story__author}</div>
          <img src={props.story__img} alt="storyimg" />
        </div>
      </div>
      <div className="story__content"></div>
      <span className="story__heading">
        <h4>{props.story__heading} </h4>
      </span>
      <span className="story__para"> {props.story__para}</span>
    </div>
  );
}
Story.defaultProps = {
  story__author: "Marry Smith",
  story__img: defaultImg,
  story__para:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.",
  story__heading: "WOW! MY LIFE IS COMPLETELY DIFFERENT NOW",
};

export default Story;
