import PropTypes from 'prop-types';

import clsx from 'clsx';
import css from '../FormInput/FormInput.module.css';

const FormInput = ({ type, name, placeholder, children }) => {
	return (
		<div className={clsx(css.inputBox)}>
			<div className={clsx(css.inputIcon)}>{children}</div>
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
	children: PropTypes.node,
};

export default FormInput;
