import React from "react";
import { useDispatch } from "react-redux";
import indicative from "indicative";
import Notiflix from "notiflix";

import { IoMdLock } from "react-icons/io";
import { BiSolidEnvelope } from "react-icons/bi";

import clsx from "clsx";
import css from "../FormSignIn/FormSignIn.module.css";

import FormInput from "../FormInput/FormInput";
import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit";
import ButtonLink from "../../components/ButtonLink/ButtonLink";

import { signIn } from "../../redux/user/userOperations";

const FormSignIn = () => {
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
    <form className={clsx(css.signInForm)} onSubmit={handleSubmit}>
      <FormInput type="email" name="email" placeholder="E-mail">
        <BiSolidEnvelope />
      </FormInput>
      <FormInput type="password" name="password" placeholder="Password">
        <IoMdLock />
      </FormInput>
      <ButtonSubmit text="Log in" />
      <ButtonLink navigate="/register" text="Register" />
    </form>
  );
};

export default FormSignIn;
