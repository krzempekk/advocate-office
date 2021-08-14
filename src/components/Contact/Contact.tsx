import React from "react";
import styles from "./Contact.module.scss";

import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import RoomIcon from "@material-ui/icons/Room";

export const Contact: React.FC = () => {
  return (
    <div className={styles.contactContainer} id="contact">
      <div className={styles.contactTitle}>Kontakt</div>
      <div className={styles.contactItemContainer}>
        <div className={styles.contactItem}>
          <RoomIcon className={styles.itemIcon} />
          <div className={styles.itemData}>
            <a
              href="https://goo.gl/maps/PX9mhhmJngiXdTq67"
              target="_blank"
              rel="noreferrer"
            >
              „Kancelaria Adwokacka” Sławomir Kowalski <br />
              ul. Wolności 345/903 (piętro 9) <br />
              41-800 Zabrze
            </a>
          </div>
        </div>
        <div className={styles.contactItem}>
          <RoomIcon className={styles.itemIcon} />
          <div className={styles.itemData}>
            <a
              href="https://goo.gl/maps/wyYw9B9oULGynqEF6"
              target="_blank"
              rel="noreferrer"
            >
              ul. Wojska Polskiego 2c <br />
              44-120 Pyskowice
            </a>
          </div>
        </div>
        <div className={styles.contactItem}>
          <EmailIcon className={styles.itemIcon} />
          <div className={styles.itemData}>
            <a href="mailto:adw.slawomir.kowalski@gmail.com">
              adw.slawomir.kowalski@gmail.com
            </a>
          </div>
        </div>
        <div className={styles.contactItem}>
          <PhoneIcon className={styles.itemIcon} />
          <div className={styles.itemData}>
            <a href="tel:+48 606 513 510">+48 606 513 510</a>
          </div>
        </div>
      </div>
    </div>
  );
};
