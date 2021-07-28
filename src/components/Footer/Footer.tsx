import React from "react";
import styles from "./Footer.module.scss";

export const Footer: React.FC = () => (
  <div className={styles.footerContainer}>
    <div>
      Icons made by{" "}
      <a href="https://icon54.com/" title="Pixel perfect">
        Pixel perfect
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </div>
  </div>
);
