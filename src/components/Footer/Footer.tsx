import React from "react";
import styles from "./Footer.module.scss";
import { ContactInfo } from "../ContactInfo/ContactInfo";

export const Footer: React.FC = () => (
  <React.Fragment>
    <ContactInfo
      hideTitle
      classNames={{
        container: styles.container,
        item: styles.contactItem,
        itemIcon: styles.itemIcon,
        itemData: styles.itemData,
      }}
    />
  </React.Fragment>
);
