import React from "react";
import "./features.css";
import FeatureBox from "../../components/feature-box/FeatureBox";
import { IoEarth } from "react-icons/io5";
import { IoCompassOutline } from "react-icons/io5";
import { IoSubwayOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";

function Features() {
  return (
    <section id="features">
      <div className="container features__container">
        <div className="features__grid">
          <FeatureBox
            heading="EXPLORE THE WORLD"
            icon={<IoEarth />}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam incidunt illo inventore quibusdam aut corporis amet veritatis iure"
          />
          <FeatureBox
            heading="meet nature"
            icon={<IoCompassOutline />}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam incidunt illo inventore quibusdam aut corporis amet veritatis iure"
          />
          <FeatureBox
            heading="find your way"
            icon={<IoSubwayOutline />}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam incidunt illo inventore quibusdam aut corporis amet veritatis iure"
          />
          <FeatureBox
            heading="live a healthier life"
            icon={<IoHeartOutline />}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam incidunt illo inventore quibusdam aut corporis amet veritatis iure"
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
