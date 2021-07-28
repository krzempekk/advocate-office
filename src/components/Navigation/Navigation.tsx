import React from "react";
import styles from "./Navigation.module.scss";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import cx from "classnames";

export const Navigation: React.FC = () => (
  <AppBar
    className={cx(styles.navigation, styles.navigationContainer)}
    position="sticky"
  >
    <Toolbar>
      <div className={styles.logo}>Sławomir Kowalski</div>
      <Button className={styles.navigationItem} href="#about-office">
        O kancelarii
      </Button>
      <Button className={styles.navigationItem} href="#services">
        Zakres usług
      </Button>
      <Button className={styles.navigationItem} href="#about-me">
        O mnie
      </Button>
      <Button className={styles.navigationItem} href="#contact">
        Kontakt
      </Button>
    </Toolbar>
  </AppBar>
);
