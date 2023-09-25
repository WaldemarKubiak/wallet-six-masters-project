import React from "react";
import { useDispatch } from "react-redux";
import indicative from "indicative";
import Notiflix from "notiflix";

import { BiSolidUserCircle } from "react-icons/bi";

import clsx from "clsx";
import css from "../FormRegister/FormRegister.module.css";

import FormInput from "../FormInput/FormInput";
import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit";
import ButtonLink from "../../components/ButtonLink/ButtonLink";

import { register } from "../../redux/user/userOperations";

const FormRegister = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const rules = {
      email: "required|email",
      password: "required|min:6|max:12",
      confirm: "required|min:6|max:12",
      name: "required|min:1|max:12",
    };

    const data = {
      email: form.elements.email.value,
      password: form.elements.password.value,
      confirm: form.elements.confirm.value,
      name: form.elements.name.value,
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
    <form className={clsx(css.signinForm)} onSubmit={handleSubmit}>
      <FormInput type="email" name="email" placeholder="E-mail">
        <BiSolidUserCircle />
      </FormInput>
      <FormInput type="password" name="password" placeholder="Password">
        <BiSolidUserCircle />
      </FormInput>
      <FormInput type="password" name="confirm" placeholder="Confirm password">
        <BiSolidUserCircle />
      </FormInput>
      <FormInput type="text" name="name" placeholder="First name">
        <BiSolidUserCircle />
      </FormInput>
      <ButtonSubmit text="Register" />
      <ButtonLink navigate="/" text="Log in" />
    </form>
  );
};

export default FormRegister;
