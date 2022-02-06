import React from "react";
import Header from "./Header/Header";
import About from "./About/About";
import Features from "./Features/Features";
import Tours from "./Tours/Tours";
import Stories from "./Stories/Stories";
import Booking from "./Booking/booking";
import Footer from "./Footer/Footer";

function index() {
  return (
    <>
      <Header />
      <About />
      <Features />
      <Tours />
      <Stories />
      <Booking />
      <Footer />
    </>
  );
}

export default index;
