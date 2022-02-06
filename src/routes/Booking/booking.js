import React from "react";
import BookingForm from "../../components/booking-form/BookingForm";
import "./booking.css";
import MainButton from "../../components/buttons/MainButton";

function booking() {
  return (
    <section>
      <div className="container booking__container">
        <div className="booking__img--container">
          <div className="booking__content">
            <h2>start booking now</h2>
            <div className="booking__bookingForm">
              <BookingForm />
              <div className="bookingForm__btn">
                <MainButton btn__name="next steps →" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default booking;
