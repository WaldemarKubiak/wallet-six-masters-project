import React from "react";
// import { useDispatch } from "react-redux";

import clsx from "clsx";
import css from "../homePage/HomePage.module.css";

import HomeScreen from "../../components/HomeScreen/HomeScreen";
import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit";
import ButtonLink from "../../components/ButtonLink/ButtonLink";

// import { signIn } from 'redux/auth/authOperations';

const HomePage = () => {
  //   const dispatch = useDispatch();

  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     const form = e.currentTarget;
  //     dispatch(
  //       signIn({
  //         password: form.elements.password.value,
  //         email: form.elements.email.value,
  //       })
  //     );

  //     form.reset();
  //   };

  return (
    <HomeScreen>
      <form
        className={clsx(css.signinForm)}
        // onSubmit={handleSubmit}
      >
        <input
          className={clsx(css.signinForm__input, css.signinForm__inputEmail)}
          type="email"
          name="email"
          placeholder="E-mail"
          required
        ></input>
        <input
          className={clsx(css.signinForm__input, css.signinForm__inputPassword)}
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <ButtonSubmit text="Log in" />
        <ButtonLink navigate="/register" text="Register" />
      </form>
    </HomeScreen>
  );
};

export default HomePage;
