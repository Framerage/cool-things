import React from "react";
import BulkCube from "../bulkCube/BulkCube";
import classes from "./styles.module.css";
const AppMainLayout = () => {
  return (
    <main className={classes.appContainer}>
      <div className={classes.contantItem}>
        <BulkCube />
      </div>
      <div className={classes.contantItem}>1</div>
      <div className={classes.contantItem}>1</div>
    </main>
  );
};
export default AppMainLayout;
