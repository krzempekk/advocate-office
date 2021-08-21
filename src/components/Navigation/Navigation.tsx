import React, { useState } from "react";
import styles from "./Navigation.module.scss";
import {
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import cx from "classnames";
import { Logo } from "../Logo/Logo";

export const Navigation: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      className={cx(styles.navigation, styles.navigationContainer)}
      position="sticky"
    >
      <Toolbar>
        <Logo />
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
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MenuIcon className={styles.menuIcon} />
        </IconButton>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
        >
          <MenuItem component="a" href="#about-office" onClick={handleClose}>
            O kancelarii
          </MenuItem>
          <MenuItem component="a" href="#services" onClick={handleClose}>
            Zakres usług
          </MenuItem>
          <MenuItem component="a" href="#about-me" onClick={handleClose}>
            O mnie
          </MenuItem>
          <MenuItem component="a" href="#contact" onClick={handleClose}>
            Kontakt
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
