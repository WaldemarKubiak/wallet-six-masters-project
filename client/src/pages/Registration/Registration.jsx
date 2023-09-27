import React from "react";

import clsx from "clsx";
import css from "../Registration/Registration.module.css";

import FormRegister from "../../components/FormRegister/FormRegister";
import HomeScreen from "../../components/HomeScreen/HomeScreen";

const Registration = () => {
  return (
    <HomeScreen>
      <FormRegister />
    </HomeScreen>
  );
};

export default Registration;
