import React from "react";
import styles from "./Header.module.scss";
import { HandshakeIcon } from "./HandshakeIcon";

export const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <HandshakeIcon className={styles.titleIcon} />
      <div className={styles.title}>Po pierwsze - wysłuchać Klienta</div>
      <div className={styles.mainText}>
        Ta maksyma przyświeca mi podczas każdego spotkania z Państwem, moimi
        Mandantami. Relacja z Klientem, oparta na
        <strong> wzajemnym zaufaniu i zrozumieniu</strong>, stanowi bowiem
        podstawę działalności mojej kancelarii -
        <strong> Kancelarii Adwokackiej adwokata Sławomira Kowalskiego</strong>.
        Każdy Klient, a zarazem każda sprawa wymaga
        <strong> indywidualnego spojrzenia</strong>.
      </div>
    </div>
  );
};
