import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/" className={styles.logo}>
          <Logo />
        </Link>
        <Link to="/">
          <Button className={styles.navigationItem}>O kancelarii</Button>
        </Link>
        <Link to="/services">
          <Button className={styles.navigationItem}>Zakres usług</Button>
        </Link>
        <Link to="/about">
          <Button className={styles.navigationItem}>O mnie</Button>
        </Link>
        <Link to="/contact">
          <Button className={styles.navigationItem}>Kontakt</Button>
        </Link>
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
          <Link to="/">
            <MenuItem component="a" onClick={handleClose}>
              O kancelarii
            </MenuItem>
          </Link>
          <Link to="/services">
            <MenuItem component="a" onClick={handleClose}>
              Zakres usług
            </MenuItem>
          </Link>
          <Link to="/about">
            <MenuItem component="a" onClick={handleClose}>
              O mnie
            </MenuItem>
          </Link>
          <Link to="/contact">
            <MenuItem component="a" onClick={handleClose}>
              Kontakt
            </MenuItem>
          </Link>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
