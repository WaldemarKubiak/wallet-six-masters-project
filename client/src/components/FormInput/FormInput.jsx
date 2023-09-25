import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";
import css from "../FormInput/FormInput.module.css";

const FormInput = ({ type, name, placeholder, children }) => {
  return (
    <div>
      <>{children}</>
      <input
        className={clsx(css.formInput)}
        type={type}
        name={name}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default FormInput;
