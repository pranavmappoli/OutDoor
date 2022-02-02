import React from "react";
import About from "./About/About";
import Features from "./Features/Features";
import Header from "./Header/Header";
import style from "./Index.module.css";

function index() {
  return (
    <div className={`${style["main-container"]}`}>
      <Header />
      <About />
      <Features />
    </div>
  );
}

export default index;
