import React from "react";
import cx from "classnames";
import styles from "./ConcactInfo.module.scss";
import RoomIcon from "@material-ui/icons/Room";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";

type ContactInfoProps = {
  hideTitle?: boolean;
  classNames?: {
    container?: string;
    item?: string;
    itemIcon?: string;
    itemData?: string;
  };
};

export const ContactInfo: React.FC<ContactInfoProps> = ({
  hideTitle,
  classNames = {},
}) => (
  <div className={cx(styles.container, classNames.container)}>
    {!hideTitle && <div className={styles.contactTitle}>Kontakt</div>}
    <div className={cx(styles.contactItem, classNames.item)}>
      <RoomIcon className={cx(styles.itemIcon, classNames.itemIcon)} />
      <div className={classNames.itemData}>
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
    <div className={cx(styles.contactItem, classNames.item)}>
      <RoomIcon className={cx(styles.itemIcon, classNames.itemIcon)} />
      <div className={classNames.itemData}>
        <a
          href="https://goo.gl/maps/wyYw9B9oULGynqEF6"
          target="_blank"
          rel="noreferrer"
        >
          Filia Kancelarii <br />
          ul. Wojska Polskiego 2c <br />
          44-120 Pyskowice
        </a>
      </div>
    </div>
    <div className={cx(styles.contactItem, classNames.item)}>
      <EmailIcon className={cx(styles.itemIcon, classNames.itemIcon)} />
      <div className={classNames.itemData}>
        <a href="mailto:adw.slawomir.kowalski@gmail.com">
          adw.slawomir.kowalski@gmail.com
        </a>
      </div>
    </div>
    <div className={cx(styles.contactItem, classNames.item)}>
      <PhoneIcon className={cx(styles.itemIcon, classNames.itemIcon)} />
      <div className={classNames.itemData}>
        <a href="tel:+48 606 513 510">+48 606 513 510</a>
      </div>
    </div>
  </div>
);
