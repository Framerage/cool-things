import React from "react";
import classes from "./styles.module.css";
const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.headerNav}>
        <li className={classes.navItem}>link</li>
        <li className={classes.navItem}>link</li>
        <li className={classes.navItem}>link</li>
        <li className={classes.navItem}>link</li>
      </nav>
    </header>
  );
};
export default Header;
