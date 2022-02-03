import React from "react";
import "./tours.css";
import TourBox from "../../components/tour-box/TourBox";

function Tours() {
  return (
    <section>
      <div className="container tours__container">
        <div className="tours__grid">
          <TourBox tour__color="blue" />
          <TourBox tour__color="green" />
          <TourBox tour__color="red" />
        </div>
      </div>
    </section>
  );
}

export default Tours;
