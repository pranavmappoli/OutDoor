import React from "react";
import "./tours.css";
import TourBox from "../../components/tour-box/TourBox";
import seaimg from "../../assets/img/nat-5.jpg";
import forestimg from "../../assets/img/nat-6.jpg";
import snowimg from "../../assets/img/nat-7.jpg";
import MainButton from "../../components/buttons/MainButton";

function Tours() {
  return (
    <section>
      <div className="container tours__container">
        <div className="tours__grid">
          <TourBox
            tour__btn__href="#popup"
            tour__color="blue"
            tour__img={seaimg}
            tour__heading="the sea explorar"
            tour__price="320"
            tour__list={[
              "4 day tour",
              "upto 30 peoples",
              "2 tour guides",
              "sleep in cozy hostel",
              "difficult: Easy",
            ]}
          />
          <TourBox
            tour__btn__href="#popup"
            tour__color="green"
            tour__img={forestimg}
            tour__heading="the forest hiker"
            tour__price="580"
            tour__list={[
              "7 day tour",
              "upto 40 peoples",
              "4 tour guides",
              "sleep in cozy hotel",
              "difficult: High",
            ]}
          />
          <div className="tours__grid-last-child">
            <TourBox
              tour__btn__href="#popup"
              tour__color="red"
              tour__img={snowimg}
              tour__heading="the snow adventure"
              tour__price="720"
              tour__list={[
                "10 day tour",
                "upto 90 peoples",
                "5 tour guides",
                "sleep in 5 start hotel",
                "difficult: Medium",
              ]}
            />
          </div>
        </div>
        <div className="tours__button">
          <MainButton
            btn__name="Discover All Tours"
            btn__bgcolor="var(--primary-color) "
            btn__color="#fff"
          />
        </div>
      </div>
    </section>
  );
}

export default Tours;
