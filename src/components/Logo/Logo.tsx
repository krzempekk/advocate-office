import React from "react";
import styles from "./Logo.module.scss";
import adwokatura from "../../assets/adwokatura.png";

export const Logo = () => (
  <div className={styles.logo}>
    <img
      className={styles.image}
      src={adwokatura}
      alt="logo Adwokatury Polskiej"
    />
    <div className={styles.textWrapper}>
      <div className={styles.upperText}>Kancelaria adwokacka</div>
      <div className={styles.lowerText}>Sławomir Kowalski</div>
    </div>
  </div>
);
