import React from "react";
import styles from "./Contact.module.scss";
import { ContactInfo } from "../ContactInfo/ContactInfo";

export const Contact: React.FC = () => {
  return (
    <React.Fragment>
      <ContactInfo
        classNames={{
          container: styles.container,
          item: styles.contactItem,
          itemIcon: styles.itemIcon,
          itemData: styles.itemData,
        }}
      />
      <div className={styles.mapTitle}>Lokalizacja Kancelarii Adwokackiej</div>
      <div className={styles.mapWrapper}>
        <iframe
          className={styles.map}
          title="Mapa z lokalizacją Kancelarii Adwokackiej"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d637.1631552310239!2d18.796592829237497!3d50.29841199871591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113267043c71f3%3A0x367a4e6af06eb992!2sWolno%C5%9Bci%20345%2C%2041-821%20Zabrze!5e0!3m2!1sen!2spl!4v1630762038861!5m2!1sen!2spl"
          width="800"
          height="600"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        />
      </div>
      <div className={styles.mapTitle}>Lokalizacja filii Kancelarii</div>
      <div className={styles.mapWrapper}>
        <iframe
          className={styles.map}
          title="Mapa z lokalizacją filii Kancelarii"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.059297913913!2d18.631231715729694!3d50.4027324794688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471125b158a418ab%3A0xe3d92279b7f81457!2sWojska%20Polskiego%202c%2C%2044-120%20Pyskowice!5e0!3m2!1sen!2spl!4v1630764166989!5m2!1sen!2spl"
          width="800"
          height="600"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        />
      </div>
    </React.Fragment>
  );
};
