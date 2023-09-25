import React from "react";

import clsx from "clsx";
import css from "../homePage/HomePage.module.css";

import HomeScreen from "../../components/HomeScreen/HomeScreen";
import FormSignIn from "../../components/FormSignIn/FormSignIn";

const HomePage = () => {
  return (
    <HomeScreen>
      <FormSignIn />
    </HomeScreen>
  );
};

export default HomePage;
