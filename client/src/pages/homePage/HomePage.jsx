import React from "react";
import { useDispatch } from "react-redux";
import indicative from "indicative";
import Notiflix from "notiflix";

import clsx from "clsx";
import css from "../homePage/HomePage.module.css";

import HomeScreen from "../../components/HomeScreen/HomeScreen";
import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit";
import ButtonLink from "../../components/ButtonLink/ButtonLink";

import { signIn } from "../../redux/user/userOperations";

const HomePage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const rules = {
      email: "required|email",
      password: "required",
    };

    const data = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    indicative
      .validateAll(data, rules)
      .then(function () {
        dispatch(
          signIn({
            password: form.elements.password.value,
            email: form.elements.email.value,
          })
        );

        form.reset();
      })
      .catch(function (err) {
        Notiflix.Notify.init({
          timeout: 5000,
        });
        Notiflix.Notify.failure(
          "All fields are required to complete the sign in process."
        );
        console.error(err);
      });
  };

  return (
    <HomeScreen>
      <form className={clsx(css.signinForm)} onSubmit={handleSubmit}>
        <input
          className={clsx(css.signinForm__input, css.signinForm__inputEmail)}
          type="email"
          name="email"
          placeholder="E-mail"
        ></input>
        <input
          className={clsx(css.signinForm__input, css.signinForm__inputPassword)}
          type="password"
          name="password"
          placeholder="Password"
        />
        <ButtonSubmit text="Log in" />
        <ButtonLink navigate="/register" text="Register" />
      </form>
    </HomeScreen>
  );
};

export default HomePage;
