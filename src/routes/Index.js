import React from "react";
import style from "./Index.module.css";
import Header from "./Header/Header";
import About from "./About/About";
import Features from "./Features/Features";
import Tours from "./Tours/Tours";
import Stories from "./Stories/Stories";

function index() {
  return (
    <div className={`${style["main-container"]}`}>
      <Header />
      <About />
      <Features />
      <Tours />
      <Stories />
    </div>
  );
}

export default index;
