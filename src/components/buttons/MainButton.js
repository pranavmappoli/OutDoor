import React from "react";
import styles from "./MainButton.module.css";
import { Link } from "react-scroll";

function MainButton(props) {
  return (
    <div
      className={`${styles.btn__container} ${
        props.btn__animation && styles.btn__animation
      }`}
    >
      {props.btn__scroll && (
        <Link
          to={props.btn__href}
          smooth={true}
          offset={50}
          duration={500}
          className={styles.btn}
          style={{
            backgroundColor: `${props.btn__bgcolor}`,
            color: `${props.btn__color}`,
          }}
        >
          {props.btn__name}
        </Link>
      )}
      {!props.btn__scroll && (
        <a
          href={props.btn__href}
          className={styles.btn}
          style={{
            backgroundColor: `${props.btn__bgcolor}`,
            color: `${props.btn__color}`,
          }}
        >
          {props.btn__name}
        </a>
      )}
    </div>
  );
}

MainButton.defaultProps = {
  btn__animation: false,
  btn__bgcolor: "",
  btn__color: "",
  btn__name: "button name",
  btn__href: "#",
  btn__scroll: true,
};

export default MainButton;
