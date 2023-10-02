import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import clsx from "clsx";
import css from "../ButtonLink/ButtonLink.module.css";

const ButtonLink = ({ navigate, text }) => {
  return (
    <Link className={clsx(css.btnLink)} to={navigate}>
      {text}
    </Link>
  );
};

ButtonLink.propTypes = {
  navigate: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonLink;
