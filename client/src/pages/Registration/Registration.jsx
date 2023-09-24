import React from "react";
import { useDispatch } from "react-redux";
import indicative from "indicative";
import Notiflix from "notiflix";

import clsx from "clsx";
import css from "../Registration/Registration.module.css";

import HomeScreen from "../../components/HomeScreen/HomeScreen";
import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit";
import ButtonLink from "../../components/ButtonLink/ButtonLink";

import { register } from "../../redux/user/userOperations";

const Registration = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const rules = {
      email: "required|email",
      password: "required|min:6|max:12",
      confirm: "required|min:6|max:12",
    };

    const data = {
      email: form.elements.email.value,
      password: form.elements.password.value,
      confirm: form.elements.confirm.value,
    };

    indicative
      .validateAll(data, rules)
      .then(function () {
        if (form.elements.password.value === form.elements.confirm.value) {
          dispatch(
            register({
              name: form.elements.name.value,
              password: form.elements.password.value,
              email: form.elements.email.value,
            })
          );
          form.reset();
        } else {
          Notiflix.Notify.init({
            timeout: 5000,
          });
          Notiflix.Notify.failure("Passwords must be the same.");
        }
      })
      .catch(function (err) {
        Notiflix.Notify.init({
          timeout: 7000,
        });
        Notiflix.Notify.failure(
          "The password should consist of 6 to 12 characters."
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
          required
        />
        <input
          className={clsx(css.signinForm__input, css.signinForm__inputPassword)}
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input
          className={clsx(css.signinForm__input, css.signinForm__inputPassword)}
          type="password"
          name="confirm"
          placeholder="Confirm password"
          required
        />
        <input
          className={clsx(css.signinForm__input, css.signinForm__inputName)}
          type="text"
          name="name"
          placeholder="First name"
          required
        />
        <ButtonSubmit text="Register" />
        <ButtonLink navigate="/" text="Log in" />
      </form>
    </HomeScreen>
  );
};

export default Registration;