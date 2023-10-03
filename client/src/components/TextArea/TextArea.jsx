import css from '../TextArea/TextArea.module.css';
import PropTypes from 'prop-types';

const TextArea = ({ type, name, placeholder }) => {
	return (
		<div className={css.inputBox}>
			<textarea
				className={css.textArea}
				type={type}
				name={name}
				placeholder={placeholder}
			/>
		</div>
	);
};

TextArea.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
};

export default TextArea;
