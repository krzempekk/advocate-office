import React from "react";
import styles from "./Introduction.module.scss";

export const Introduction = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        <div className={styles.headingText}>
          Po pierwsze - wysłuchać klienta
        </div>
      </h2>
      <p>
        Ta maksyma przyświeca mi podczas każdego spotkania z Państwem, moimi
        Mandantami. Relacja z Klientem, oparta na wzajemnym zaufaniu i
        zrozumieniu, stanowi bowiem podstawę działalności mojej kancelarii -
        <strong> Kancelarii Adwokackiej adwokata Sławomira Kowalskiego</strong>.
        Każdy Klient, a zarazem każda sprawa wymaga indywidualnego spojrzenia.
      </p>
      <h2 className={styles.heading}>
        <div className={styles.headingText}>
          „Nic dwa razy się nie zdarza i nie zdarzy”
        </div>
      </h2>
      <p>
        Parafrazując powyższy wiersz wielkiej polskiej Poetki Wisławy
        Szymborskiej mogę po latach doświadczeń napisać, że żadna sprawa się nie
        powtórzy, nie ma dwóch podobnych rozpraw, dwóch tych samych sporów,
        dwóch jednakich osądów. Kilkanaście lat doświadczenia na rynku usług
        prawniczych przekonało mnie do prowadzenia indywidualnej praktyki
        adwokackiej, ukierunkowanej na
        <strong> ścisłą i zindywidualizowaną współpracę</strong> z każdym
        Klientem.
      </p>
      <p>
        W związku z tym moje usługi pragnę polecić przede wszystkim
        <strong> osobom fizycznym</strong>, a także
        <strong> małym i średnim przedsiębiorcom</strong>, często prowadzącym
        jednoosobowe działalności gospodarcze, czy też opartych o spółki cywilne
        oraz jawne, a także niewielkie spółki z ograniczoną odpowiedzialnością.
      </p>
    </div>
  );
};
