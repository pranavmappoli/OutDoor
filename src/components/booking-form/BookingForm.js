import React from "react";
import "./bookingForm.css";

function BookingForm() {
  return (
    <div className="bookingForm__container">
      <div className="booking__label--component">
        <input type="text" id="name" placeholder="Full Name" required />
        <label htmlFor="name">Full Name</label>
      </div>
      <div className="booking__label--component">
        <input type="email" id="email" placeholder="E-mail" required />
        <label htmlFor="email">E-mail</label>
      </div>
      <div className="radiobutton__container">
        <div className="booking__radio--component">
          <input type="radio" id="radiosmall" name="radiogroup" />
          <label htmlFor="radiosmall" className="labelelem">
            <span className="radiobutton__label--button"></span>
            Small Tour Group
          </label>
        </div>
        <div className="booking__radio--component">
          <input type="radio" id="radiolarge" name="radiogroup" />
          <label htmlFor="radiolarge" className="labelelem">
            <span className="radiobutton__label--button"></span>
            Large Tour Group
          </label>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
