// import React from "react";
import PropTypes from 'prop-types';

import clsx from 'clsx';
import css from '../ButtonSubmit/ButtonSubmit.module.css';

const ButtonSubmit = ({ text }) => {
	return (
		<button type='submit' className={clsx(css.buttonSubmit)}>
			{text}
		</button>
	);
};

ButtonSubmit.propTypes = {
	text: PropTypes.string.isRequired,
};

export default ButtonSubmit;
