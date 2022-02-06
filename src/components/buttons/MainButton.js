import React from "react";
import styles from "./MainButton.module.css";

function MainButton(props) {
  return (
    <div
      className={`${styles.btn__container} ${
        props.btn__animation && styles.btn__animation
      }`}
    >
      <a
        href="#"
        className={styles.btn}
        style={{
          backgroundColor: `${props.btn__bgcolor}`,
          color: `${props.btn__color}`,
        }}
      >
        {props.btn__name}
      </a>
    </div>
  );
}

MainButton.defaultProps = {
  btn__animation: false,
  btn__bgcolor: "var(--primary-color)",
  btn__color: "#fff",
  btn__name: "button name",
};

export default MainButton;
