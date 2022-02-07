import React from "react";
import "./popupBox.css";
import img1 from "../../assets/img/nat-9.jpg";
import img2 from "../../assets/img/nat-8.jpg";
import MainButton from "../buttons/MainButton";
import { IoClose } from "react-icons/io5";

function PopupBox() {
  return (
    <div className="popup-Container" id="popup">
      <div className="popupgrid">
        <a className="popup__close-btn" href="#tours">
          <IoClose />
        </a>
        <div className="popup__image--container">
          <img src={img1} alt="image1" />
          <img src={img2} alt="image2" />
        </div>
        <div className="popup__description">
          <h2>START BOOKING NOW</h2>
          <h4>! PLEASE READ THESE TERMS BEFORE BOOKING</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
            sagittis justo. Curabitur ligula est, pulvinar vitae varius eget,
            auctor id metus. Morbi at tempor felis. Nullam id justo vitae arcu
            varius tempus. Donec aliquet scelerisque lectus id pharetra. Morbi
            nec ultrices metus. Nam quis nunc at enim fringilla molestie at
            euismod sem. Suspendisse cursus erat metus.
          </p>
          <MainButton
            btn__bgcolor="var(--primary-color)"
            btn__color="#fff"
            btn__name="Book Now !"
          />
        </div>
      </div>
    </div>
  );
}

export default PopupBox;
