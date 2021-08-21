import React from "react";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <blockquote className={styles.quote}>
        <div className={styles.title}>
          <q>Pacta sunt servanda</q>
        </div>
        <div className={styles.mainText}>Umów należy dotrzymywać</div>
      </blockquote>
    </div>
  );
};
