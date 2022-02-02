import React from "react";
import "./featureBox.css";
function FeatureBox(props) {
  return (
    <div className="feature-box">
      <div className="featureBox__icon">{props.icon}</div>
      <div className="featureBox__content">
        <h4 className="featureBox__content--heading">{props.heading}</h4>
        <div>{props.content}</div>
      </div>
    </div>
  );
}

export default FeatureBox;
