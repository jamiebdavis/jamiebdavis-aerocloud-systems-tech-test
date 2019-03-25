import React from "react";
import classes from "./Toolbar.module.css";

const Toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <i class="material-icons">hotel</i>
      <h3>AeroCloud Systems Technical Test</h3>
      <a href="/">
        <button>Reset</button>
      </a>
    </header>
  );
};

export default Toolbar;
