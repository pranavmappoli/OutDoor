import React from "react";
import Header from "./Header/Header";
import style from "./Index.module.css";

function index() {
  return (
    <div className={`${style["main-container"]}`}>
      <Header />
    </div>
  );
}

export default index;
