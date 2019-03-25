import React from "react";
import classes from "./Toolbar.module.css";
import Button from "../Button/Button";

const Toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <i class="material-icons">hotel</i>
      <h3>AeroCloud Systems Technical Test</h3>
      <a href="/">
        <Button value="Refresh Page" onClick="window.location.reload()">
          Reset
        </Button>
      </a>
    </header>
  );
};

export default Toolbar;
