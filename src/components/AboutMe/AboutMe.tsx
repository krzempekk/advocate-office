import React, { Fragment } from "react";
import styles from "./AboutMe.module.scss";
import photo from "../../assets/photo.jpg";

export const AboutMe: React.FC = () => {
  const timelineItems = [
    {
      time: "2000",
      description: (
        <Fragment>
          Ukończenie studiów magisterskich na kierunku <strong>prawo</strong> na{" "}
          <strong>Wydziale Prawa i Administracji</strong> Uniwersytetu Śląskiego
          w Katowicach
        </Fragment>
      ),
    },
    {
      time: "2001",
      description: (
        <Fragment>
          Obrona pracy magisterskiej na temat:{" "}
          <strong>„Podstawy kasacji w polskim procesie karnym”</strong>
        </Fragment>
      ),
    },
    {
      time: "2002",
      description: (
        <Fragment>
          Praca na stanowisku <strong>specjalisty do spraw prawnych</strong> w
          jednej z wiodących na Śląsku firm windykacyjnych
        </Fragment>
      ),
    },
    {
      time: "2004",
      description: (
        <Fragment>
          Rozpoczęcie aplikacji sądowej przy{" "}
          <strong>Sądzie Okręgowym w Gliwicach</strong>
        </Fragment>
      ),
    },
    {
      time: "2007",
      description: (
        <Fragment>
          Złożenie egzaminu sędziowskiego z wynikiem{" "}
          <strong>dobrym plus</strong>
        </Fragment>
      ),
    },
    {
      time: "2007 - 2009",
      description: (
        <Fragment>
          Praca jako <strong>asystent Sędziego</strong> w Wydziale III Pracy i
          Ubezpieczeń Społecznych Sądu Apelacyjnego w Katowicach
        </Fragment>
      ),
    },
    {
      time: "2009",
      description: (
        <Fragment>
          Wpisanie na listę adwokatów{" "}
          <strong>Okręgowej Izby Adwokackiej</strong> w Katowicach i założenie{" "}
          <strong>Indywidualnej Kancelarii Adwokackiej</strong> z siedzibą w
          Zabrzu, którą prowadzę obecnie
        </Fragment>
      ),
    },
  ];

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>O mnie</h2>
      <div className={styles.container}>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.descriptionTitle}>O mnie</h2>
          <div className={styles.description}>
            Posiadam wieloletnie doświadczenie w zakresie obsługi prawnej{" "}
            <strong>osób fizycznych</strong> oraz{" "}
            <strong>małych podmiotów gospodarczych</strong>, w tym przede
            wszystkim w zakresie{" "}
            <strong>reprezentacji stron w sporach sądowych</strong>. Władam
            językiem <strong>niemieckim</strong>.
            <div className={styles.timelineContainer}>
              {timelineItems.map((item) => (
                <div className={styles.timelineItem}>
                  <div className={styles.itemData}>
                    <div>{item.description}</div>
                    <div className={styles.itemTime}>{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.photoContainer}>
          <img src={photo} alt="Zdjęcie Sławomira Kowalskiego" />
        </div>
      </div>
    </div>
  );
};
