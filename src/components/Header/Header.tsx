import React from "react";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <blockquote className={styles.quote}>
        <div className={styles.title}>Pacta sunt servanda</div>
        <div className={styles.subtitle}>Umów należy dotrzymywać</div>
      </blockquote>
    </div>
  );
};
