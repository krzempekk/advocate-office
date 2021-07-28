import React from "react";
import styles from "./FieldsOfSpecialty.module.scss";
import { Field } from "./Field";
import { Grid } from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessIcon from "@material-ui/icons/Business";

export const FieldsOfSpecialty: React.FC = () => {
  const fields = [
    {
      icon: HomeIcon,
      title: "Prawo rodzinne i opiekuńcze",
      description:
        "Sprawy o rozwód i separację, alimenty, uregulowanie kontaktów z małoletnimi...",
      items: [
        "o rozwód i separację",
        "o alimenty",
        "o uregulowanie kontaktów z małoletnimi",
        "o pozbawienie, ograniczenie, powierzenie władzy rodzicielskiej",
        "o ustalenie i zaprzeczenia ojcostwa",
        "o ustalenie i zaprzeczenie macierzyństwa",
        "o ustanowienie rozdzielności majątkowej",
        "o podział majtku dorobkowego",
        "o ubezwłasnowolnienie",
      ],
    },
    {
      icon: WorkIcon,
      title: "Prawo pracy i ubezpieczeń społecznych",
      description:
        "Sprawy o prawo do emerytury na zasadach ogólnych, pomostowej...",
      items: [
        "o prawo do emerytury na zasadach ogólnych",
        "o prawo do emerytury z tytułu pracy w warunkach szczególnych/szczególnym charakterze",
        "o prawo do emerytury pomostowej",
        "o prawo do emerytury górniczej",
        "o prawo do renty",
        "o uznanie wypowiedzenia umowy o pracę za bezskuteczne",
        "o przywrócenie do pracy",
        "o odszkodowanie za bezpodstawne bądź niezgodne z prawem wypowiedzenie umowy o pracę",
        "o odszkodowanie za bezpodstawne bądź niezgodne z prawem rozwiązanie umowy o pracę bez wypowiedzenia",
        "o ustalenie istnienia stosunku pracy",
        "o wydanie i sprostowanie świadectwa pracy",
        "o zapłatę wynagrodzenia za pracę",
      ],
    },
    {
      icon: SupervisorAccountIcon,
      title: "Prawo cywilne",
      description:
        "Sprawy o zapłatę, zadośćuczynienie, przeciwko sprawcom wypadków...",
      items: [
        "o zapłatę",
        "o uchylenie się od skutków prawnych oświadczenia woli złożonego pod wpływem błędu, groźby, podstępu, w stanie wyłaczającym śwadome powzięcie decyzji i wyrażenie woli",
        "powództwa przeciwegzekucyjne",
        "o odszkodowania od firm ubezpieczeniowych, w tym odszkodowania komunikacyjne",
        "o odszkodowanie za uszczerbek na zdrowiu",
        "przeciwko sprawcom wypadków",
        "o zadośćuczynienie",
        "sądowa windykacja należności",
        "o zasiedzenie",
        "o rozgraniczenie nieruchomości",
      ],
    },
    {
      icon: BusinessIcon,
      title: "Prawo gospodarcze",
      description: "Przykładowe sprawy z tej dziedziny prawa...",
      items: [
        "o ochronę naruszonego posiadania",
        "o służebność drogi koniecznej",
        "o zniesienie współwłasności",
        "o eksmisję",
        "o ustalenie stosunku najmu",
        "o stwierdzenie nabycia spadku",
        "o dokonanie spisu inwentarza",
        "o odrzucenie spadku",
        "o otwarcie i ogłoszenie testamentu",
        "o dział spadku",
      ],
    },
  ];

  return (
    <div className={styles.fieldsContainer} id="services">
      <h2 className={styles.fieldsHeading}>
        Dziedziny prawa, w których się specjalizuję
      </h2>
      <Grid container spacing={3}>
        {fields.map((field) => (
          <Grid item xs={3}>
            <Field {...field} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
