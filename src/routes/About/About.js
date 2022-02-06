import React from "react";
import "./about.css";
import img1 from "../../assets/img/nat-1-large.jpg";
import img2 from "../../assets/img/nat-2-large.jpg";
import img3 from "../../assets/img/nat-3-large.jpg";
import SecondButton from "../../components/buttons/SecondButton";

function About() {
  return (
    <section className="about">
      <div className="container about__container">
        <h2 className="about__heading">
          EXCITING TOURS FOR ADVENTUROUS PEOPLE
        </h2>
        <div className="about__container--main">
          <div className="about__para">
            <h4>You are GOING TO FALL IN LOVE WITH NATURE</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              incidunt illo inventore quibusdam aut corporis amet veritatis
              iure, dicta temporibus voluptates quam aperiam sunt perferendis ad
              deleniti neque blanditiis dignissimos.
            </p>
            <h4>Live in advenTURES LIKE YOU NEVER HAVE BEFORE</h4>
            <p>
              dolor sit amet consectetur adipisicing elit. Libero voluptate
              maiores consequatur placeat eligendi nam commodi deleniti quia
              neque id! Natus ratione.
            </p>
            <SecondButton btn__name="Learn more →" />
          </div>
          <div className="about__imges">
            <div className="about__img">
              <img className="about__img--1" src={img1} alt="images" />
              <img className="about__img--2" src={img2} alt="images" />
              <img className="about__img--3" src={img3} alt="images" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
