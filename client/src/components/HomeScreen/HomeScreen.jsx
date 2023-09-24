import React from "react";

import clsx from "clsx";
import css from "../HomeScreen/HomeScreen.module.css";

const HomeScreen = ({ children }) => {
  return (
    <div className={clsx(css.homeScreenBox)}>
      <h2>Wallet</h2>
      {children}
    </div>
  );
};

export default HomeScreen;
