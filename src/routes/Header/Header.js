import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/img/logo-white.png";
import MainButton from "../../components/buttons/MainButton";

function header() {
  return (
    <>
      <header className={styles.header} id="home">
        <div className={styles.header_container}>
          <nav className={styles.navigation}>
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
            </div>
            <div className={`${styles["nav-item"]}`}></div>
          </nav>
        </div>
        <div className={styles.head__main_cont}>
          <h1 className={styles.left__anim}>OUTDOORS</h1>
          <h3 className={styles.right__anim}>IS WHERE LIFE HAPPENS</h3>
          <MainButton
            btn__name="Discover our Tours"
            btn__animation={true}
            btn__href="tours"
          />
        </div>
      </header>
    </>
  );
}

export default header;
