import React from "react";
import AppMainLayout from "../appMainLayout";
import Header from "../header";
import classes from "./styles.module.css";
const AppLayout = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <AppMainLayout />
      <footer
        style={{
          position: "fixed",
          bottom: 0,
          border: "1px solid orange",
          width: "100%",
          height: "100px",
        }}
      >
        footer's text
      </footer>
    </div>
  );
};
export default AppLayout;
